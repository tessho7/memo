### 1.3.0
使用方法が変わっていたのでメモ
```javascript
var mailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var smtp = mailer.createTransport( smtpTransport( {
	port	  : 465,
	host	  : 'smtp.gmail.com',
	secure	: true,
	auth	  : {
	  user  : 'ユーザー',
	  pass  : 'パスワード'
	}
} ) );
smtp.sendMail(
  {
    from    : '"名前" <from@ドメイン>',
    to      : '"名前" <to@ドメイン>',
    subject : '件名',
    text    : '本文',
  },
  function( err, res ){
    if( err ) throw err;
    console.log( res );
    smtp.close();
  }
);
```

#### sendMail -> res
```
{ accepted: [ 'to@ドメイン' ],
  rejected: [],
  response: '250 2.0.0 OK ...',
  envelope: { from: 'from@ドメイン', to: [ 'to@ドメイン' ] },
  messageId: 'メッセージID' }
```
