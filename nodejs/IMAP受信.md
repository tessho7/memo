### inbox
```javascript
var inbox = require('inbox');
var iconv = require('iconv');

// connect imap
var imap = inbox.createConnection( 993, 'imap.gmail.com', {
    secureConnection: true,
    auth: {
        user: 'ユーザー',
        pass: 'パスワード'
    }
} );
imap
    .on( 'new', function( message ){
        var data = {
            uid     : message.UID,
            date    : message.date,
            from    : message.from,
            to      : message.to,
            title   : message.title,
            body    : ''
        };
        // エンコード設定
        var conv = new iconv.Iconv( message.bodystructure.parameters.charset, 'UTF-8');
        // body取得
        var tmp_chunk = '';
        imap.createMessageStream( message.UID )
            .on('data', function( chunk ){
                if( tmp_chunk === null ){
                    tmp_chunk = chunk;
                }else{
                    tmp_chunk += chunk;
                }
            })
            .on('end', function(){
                data.body = conv.convert( tmp_chunk ).toString();
                console.log('[message]-------------------------------------');
                console.log( message );
                console.log('[data]----------------------------------------');
                console.log( data );
                
                // 削除
                console.log('[delete - ' + message.UID +']-----------------');
                imap.deleteMessage( message.UID, function( err ){
                    console.log(err || "success, message deleted");
                } )
            })
        ;
    } )
;
```
