/**************************************************
 * memcachedのkey一覧を取得したかったので作成
 * 
 * memls.getの第一引数にRegExpを渡すとそれにマッチするkeyを返す
 * 第一引数がFunctionならcallbackに置換えて実行
 * 
 * var memdList = require( '../libs/memdList' ) );
 * var memls = new memdList();
 * memls.get( /^\w{32}$/, function( err, items ){
 *   console.log( {err:err, items:items.length, one:items[0], two:items[1] } );
 * } );
 **************************************************/
var net = require( 'net' );
var async = require( 'async' );

var crlf = '\r\n';

var memdList = function(){}
memdList.prototype._query = function( key, callback ){
	var data = [];
	var buffer = '';
	var connection = net.connect( {port:11211, host:'localhost'}, function( err ){
		if( err ){
			callback && callback( err );
		}else{
			connection.on( 'data', function( chunk ){
				var _data = chunk.toString( 'utf-8' );
				if( buffer !== null && _data ){
					buffer += _data;
					while( buffer.match( /\r?\n/ ) ){
						var line	= RegExp.leftContext;
						buffer		= RegExp.rightContext;
						if( line.trim() == 'END' ){
							connection.removeAllListeners( 'data' );
							connection.write( 'quit' + crlf, 'utf-8', function(){
								callback && callback( null, data );
								buffer = data = _data = connection = null;
							} )
						}else{
							data.push( line );
						}
					}
				}
			} );
			connection.write( key + crlf );
		}
	} );
};
memdList.prototype.get = function( regexp, callback ){
	var self = this;
	async.waterfall( [
		function( next ){
			self._query( 'stats items', next );
		},
		function( items, next ){
			async.filter( items, function( item, next ){
				next( item.match( /^STAT items\:(\d+)\:number (\d+)$/ ) );
			}, function( items ){
				next( null, items );
			} );
		},
		function( items, next ){
			async.map( items, function( item, next ){
				item.match( /^STAT items\:(\d+)\:number (\d+)$/ );
				next( null, { item: RegExp.$1, len: RegExp.$2 } );
			}, next );
		},
		function( items, next ){
			async.map( items, function( item, next ){
				self._query( 'stats cachedump ' + [ item.item, item.len ].join( ' ' ), next );
			}, next );
		},
		function( items, next ){
			var data = [];
			async.each( items, function( item, next ){
				data = data.concat( item );
				next();
			}, function( err, res ){
				next( err, data );
			} );
		},
		function( items, next ){
			async.map( items, function( item, next ){
				item.match( /^ITEM (.*) \[.*$/ );
				next( null, RegExp.$1 );
			}, next );
		}
	], function( err, items ){
		var filterd = null;
		if( regexp instanceof Function ){
			callback = regexp;
		}else{
			try{
				filterd = items.filter( function( line ){
					return line.match( regexp );
				} );
			}catch( e ){
				callback && callback( e );
				return;
			}
		}
		callback && callback( err, filterd || items );
	} );
}

module.exports = memdList;
