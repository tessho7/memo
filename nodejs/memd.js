var memcache = require('memcache'),
    memd = new memcache.Client( 11211, [host || 'localhost'] )
;

/***
 * "memcache": "~0.3.0"のEND問題仮対応
 ***/
var crlf = "\r\n";
var crlf_len = crlf.length;
memd.handle_get = function(buffer) {
    var next_result_at = 0;
    var result_value = null;
    var end_indicator_len = 3;
    var result_len = 0;

    if (buffer.indexOf('END' + crlf) == 0) {
        return [result_value, end_indicator_len + crlf_len];
    } else if (buffer.indexOf('VALUE') == 0 && buffer.indexOf(crlf + 'END' + crlf) != -1) {
        first_line_len = buffer.indexOf(crlf) + crlf_len;
        var end_indicator_start = buffer.lastIndexOf(crlf + 'END' + crlf);
        result_len = end_indicator_start - first_line_len;
        result_value = buffer.substr(first_line_len, result_len);
        return [result_value, first_line_len + parseInt(result_len, 10) + crlf_len + end_indicator_len + crlf_len]
    } else {
        var first_line_len = buffer.indexOf(crlf) + crlf_len;
        var result_len     = buffer.substr(0, first_line_len).split(' ')[3];
        result_value       = buffer.substr(first_line_len, result_len);

        return [result_value, first_line_len + parseInt(result_len ) + crlf_len + end_indicator_len + crlf_len];
    }
};
/***
 * 同時アクセス時に対応
 * set等も同様の問題が有ると思われるので後々対応
 ***/
memd.get = function(key, callback, retry) {
    // return this.query('get ' + key, 'get', callback);
    var self = this;
    if( !self.queue ){ self.queue = {}; }
    if( !retry ){
        if( !( key in self.queue ) ){ self.queue[ key ] = []; }
        self.queue[ key ].push( {key:key, callback:callback} );
    }
    
    if( self.queueActive ){ return; }
    self.queueActive = key;
    
    self.query('get ' + self.queue[ key ][ 0 ].key, 'get', function( err, val ){
        while( self.queue[ key ].length > 0 ){
            var queue = self.queue[ key ].shift();
            queue.callback( err, val );
        }
        self.queue[ key ].length <= 0 && delete self.queue[ key ];
        self.queueActive = null;
        if( Object.keys( self.queue ).length ){
            setImmediate( function(){
                var nextKey = Object.keys( self.queue ).shift();
                var nextQueue = self.queue[ nextKey ][ 0 ];
                self.get( nextKey, nextQueue.callback, true );
            } );
        }
    });
}

memd.on('connect', function(){
	// no arguments - we've connected
	console.log( 'memd.connect', arguments );
}).on('close', function(){
	// no arguments - connection has been closed
	console.log( 'memd.close', arguments );
	setTimeout( function(){ memd.connect(); }, 1000 );
}).on('timeout', function(){
	// no arguments - socket timed out
	console.log( 'memd.timeout', arguments );
}).on('error', function( e ){
	// there was an error - exception is 1st argument
	console.error( 'memd.error', arguments );
}).connect();

module.exports = memd;
