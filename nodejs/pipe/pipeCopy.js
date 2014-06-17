var path = require('path'),
    fs  = require('fs')
;

// CSVファイルパス取得
var fp_csv = process.argv[2] || process.exit(1);
fs.existsSync( fp_csv ) || process.exit(1);

// 出力先
var fp_res_normal = path.join( __dirname, 'test_normal.csv' );
var fp_res_transform = path.join( __dirname, 'test_transform.csv' );

// Transform
var stream = require('stream').Transform;
var util = require('util');
util.inherits(filterStream, stream);
function filterStream(){
    if (!(this instanceof filterStream)) return new filterStream();
    stream.call( this );
    this.buf = '';
}
filterStream.prototype._transform = function( chunk, enc, done ){
    var _data = chunk.toString('utf-8');
    if( _data ){
        // １行ずつ(改行ごと：\r\n|\n)処理
        this.buf += _data;
        while( this.buf.match( /\r?\n/ ) ){
            var line = RegExp.leftContext;
            this.buf = RegExp.rightContext;
            var args = line.trim().split(/\,/);
            args.push('追加');
            this.push( args.join(',') + '\n' );
        }
    }
    done();
};

// 出力 - normal
fs.createReadStream( fp_csv, { encoding: 'utf8', mode: 0644 } )
    .pipe( fs.createWriteStream( fp_res_normal, { flags: 'w', encoding: 'utf8', mode: 0666 } ) )
;

// 出力 - transform
fs.createReadStream( fp_csv, { encoding: 'utf8', mode: 0644 } )
    .pipe( new filterStream() )
    .pipe( fs.createWriteStream( fp_res_transform, { flags: 'w', encoding: 'utf8', mode: 0666 } ) )
;

