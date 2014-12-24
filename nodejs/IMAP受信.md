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
imap.on('connect', function(){
    console.log('connected');
    imap.openMailbox('INBOX', function(error){
        if(error) throw error;
        
        // リスト取得
        imap.listMessages(-10, function(err, messages){
            messages.forEach(function(message){
                console.log(message.UID + ": " + message.title);
            });
        });
    });
    imap.on('new', function(message){
        var data = {
            uid     : message.UID,
            date    : message.date,
            from    : message.from,
            to      : message.to,
            title   : message.title,
            body    : ''
        };
        console.log('[message]-------------------------------------');
        console.log( message );
        
        // charset設定(エラー処理は適宜追加の必要あり)
        var conv = new iconv.Iconv( message.bodystructure.parameters.charset, 'UTF-8');
        
        // body取得
        var tmp_chunk = null;
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
                console.log('[delete - ' + message.UID +']-------');
                imap.deleteMessage( message.UID, function( err ){
                    console.log(err || "success, message deleted");
                } );
            })
        ;
    });
}).connect();
```

- body取得の部分は、電文そのままなので別途パースが必要
