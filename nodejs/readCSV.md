## CSV読込(node v4.6.2)
```node
var fs    = require('fs'),
    path  = require('path'),
    csv   = require('csv'),
    Iconv = require('iconv').Iconv
;
var iconv = new Iconv('SHIFT_JIS', 'UTF-8//TRANSLIT//IGNORE');
var fp = path.join( __dirname, 'sample.csv' );
var rs = fs.createReadStream( fp ).pipe( iconv );
var evtCsv = rs.pipe( csv.parse() ).pipe( csv.transform( function( record ){
  console.log( 'record: ', record );
} ) );
evtCsv.on( 'finish', function(){
  console.log( 'finish' );
} );
```
