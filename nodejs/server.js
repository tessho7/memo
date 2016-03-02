var http    = require( 'http' ),
    fs      = require( 'fs' ),
    path    = require( 'path' ),
    mime    = require( 'mime' ),
    async   = require( 'async' ),
    log4js  = require( 'log4js' )
;
require('date-utils');

var base    = process.argv[ 2 ] || process.cwd();
var port    = process.argv[ 3 ] || 80;
var host    = process.argv[ 4 ] || '0.0.0.0';

var config = {
    "appenders": [
        {
            type    : "console",
            layout  : {
                type    : "pattern",
                // pattern  : "%[%r (%x{pid}) %p %c -%] %m",
                pattern : "%[%x{date} (%z) %-5p %c -%] %m",
                tokens  : {
                    date    : function(){ return new Date().toFormat( 'YYYY/MM/DD HH24:MI:SS' ) },
                }
            }
        }
    ]
};
log4js.configure(config, {});


var logger = log4js.getLogger();
var lt = log4js.connectLogger( log4js.getLogger(), {
    'level': log4js.levels.INFO,
    // 'nolog': [ '\\css', '\\.js', '\\.gif' ],
    // 'format': JSON.stringify({
    //  'remote-addr'   : ':remote-addr',
    //  'method'        : ':method',
    //  'url'           : ':url',
    //  'http-version'  : ':http-version',
    //  'status'        : ':status',
    //  'content-length': ':content-length',
    //  'referrer'      : ':referrer',
    //  'user-agent'    : ':user-agent'
    // }, null, '\t')
} );

// console.log( log4js.levels );
// logger.setLevel( log4js.levels.ERROR );
logger.setLevel( log4js.levels.INFO );

var server = http.createServer( function( req, res ){
    req.originalUrl = req.originalUrl || req.url;
    
    async.parallel( {
        logs        : function( next ){
            lt( req, res, next );
        },
        response    : function( next ){
            var route = req.url.replace( /^\//, '' ) || 'index.html';
            var fp = path.resolve( path.join( base, route ) );
            
            fs.exists( fp, function( exists ){
                if( !exists ){
                    res.writeHead( 404 );
                    res.end( 'not found' );
                    next( {code: 404, message: 'not found', url: req.url} );
                }else{
                    var stats = fs.statSync( fp );
                    var makeLog = function( type, next ){
                        return function(){
                            logger.debug( type, JSON.stringify( {
                                url     : req.url,
                                path    : fp,
                                size    : stats.size,
                                mime    : mime.lookup( fp ),
                                args    : arguments
                            } ) );
                            next && next();
                        }
                    };
                    var headers = {
                        'Content-Type'          : mime.lookup( fp ),
                        'Content-Length'        : stats.size
                    };
                    /*** downloadする場合はヘッダーセット
                    if( headers[ 'Content-Type' ].match( /^application\// ) ){
                        headers[ 'Content-Disposition' ] = 'attachment; filename="' + fp + '"';
                    }
                    ***/
                    res.writeHead( 200, headers );
                    
                    var rs = fs.createReadStream( fp );
                    rs.on( 'open',  makeLog( 'open' ) );
                    rs.on( 'error', makeLog( 'error' ) );
                    rs.on( 'end',   makeLog( 'end' ) );
                    rs.on( 'close', makeLog( 'close', next ) );
                    rs.pipe( res );
                }
            } );
        }
    }, function( err ){
        if( err ){
            logger.error( 'error', err );
        }else{
            logger.debug( 'done' );
        }
    } );
} );
server.on( 'error', function(){
    console.log( new Date().toFormat( 'YYYY/MM/DD HH24:MI:SS' ), arguments );
} );
server.listen( port, host );

console.log( new Date().toFormat( 'YYYY/MM/DD HH24:MI:SS' ), 'start', [host, port].join( ':' ), base );
