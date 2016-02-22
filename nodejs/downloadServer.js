var http    = require( 'http' ),
    fs      = require( 'fs' ),
    mime    = require( 'mime' )
;
require('date-utils');

// ダウンロードファイルは引数で指定
var fp      = process.argv[ 2 ];
var port    = process.argv[ 3 ] || 80

if( !fp || !fs.existsSync( fp ) ){ throw 'not found' }

var server = http.createServer( function( req, res ){
    var stats = fs.statSync( fp );
    
    console.log( new Date().toFormat( 'YYYY/MM/DD HH24:MI:SS' ), {
        url     : req.url,
        path    : fp,
        size    : stats.size,
        mime    : mime.lookup( fp )
    } );
    
    res.writeHead( 200, {
        'Content-Type'          : mime.lookup( fp ),
        'Content-Length'        : stats.size,
        'Content-Disposition'   :'attachment; filename="' + fp + '"'
    } );
    
    var rs = fs.createReadStream( fp );
    rs.on( 'error', function(){ console.log( new Date().toFormat( 'YYYY/MM/DD HH24:MI:SS' ), 'error', arguments ) } )
    rs.on( 'end',   function(){ console.log( new Date().toFormat( 'YYYY/MM/DD HH24:MI:SS' ), 'end', arguments ) } )
    rs.on( 'close', function(){ console.log( new Date().toFormat( 'YYYY/MM/DD HH24:MI:SS' ), 'close', arguments ) } )
    
    rs.pipe( res );
} );
server.on( 'error', function(){
    console.log( new Date().toFormat( 'YYYY/MM/DD HH24:MI:SS' ), arguments );
} );
server.listen( port );

console.log( new Date().toFormat( 'YYYY/MM/DD HH24:MI:SS' ), 'start' );
