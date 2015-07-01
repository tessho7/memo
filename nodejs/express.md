### express4でlayout.ejs
```bash
# cd /var/www/ && express -e hogehoge && cd hogehoge && npm install
# npm install express-partials --save
```
```diff
+++ app.js      2015-07-01 14:51:15.000000000 +0900
@@ -1,4 +1,5 @@
 var express = require('express');
+var partials = require('express-partials');
 var path = require('path');
 var favicon = require('serve-favicon');
 var logger = require('morgan');
@@ -13,6 +14,7 @@
 // view engine setup
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs');
+app.use( partials() );
 
 // uncomment after placing your favicon in /public
 //app.use(favicon(__dirname + '/public/favicon.ico'));
```
あとは、layout.ejsを作成し、index.ejsのヘッダとフッターをlayout.ejsに合わせて書換え
