var http	= require('http'),
	fs		= require('fs')
;

// ドキュメントルート設定
var htdocs = process.argv[2] || __dirname;

// mime types 読込み／検索用データ作成
var mimeTypes = require(__dirname + '/mimeTypes');
var tmpMimeTypes = [];
for(var key in mimeTypes){ tmpMimeTypes.push(key); }
var mimeTypesRegexp = new RegExp('(' + tmpMimeTypes.join('|') + ')$', 'g');
console.log(mimeTypesRegexp);

// エラー時のレスポンス
var pageError = function(res){
	res.writeHead(404)
	res.end(http.STATUS_CODES[404]);
}

// サーバー
var server = http.createServer(function(req,res){
	if(req.url.match('favicon.ico')){
		res.end('');
	}else{
		if( /^\/$/.test(req.url) ){
			req.url = '/index.html';
		}
		var path = htdocs + req.url;
		fs.stat(path, function(err, fileInfo){
			if(err){
				console.error(err)
				pageError(res);
			}else{
				var extc = path.match(mimeTypesRegexp)[0];
				res.writeHead(200, {
					'Content-Length': fileInfo.size,
					'Content-Type'	: mimeTypes[extc]
				});
				var frs = fs.createReadStream( path )
					.on('error', function(err){ console.error(err); })
				;
				frs.pipe(res);
			}
		});
	}
});
server.listen(3001);
