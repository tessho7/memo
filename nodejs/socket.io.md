- だいぶ端折ったので、コピペで動くかは未確認
- web側はその内追加するかも
- angularjs1.3系
- nodejs0.10系

## server
### 色々省略したソース(接続／切断／session参照)
- sessionはmemcacheに保存
- シークレット設定
- sessionにはuserをキーにユーザーデータを格納
```node
/*** socket.ioのみ */
var cookie	= require('cookie'),
    cparser	= require('cookie-parser')
;

var memd = new memcache.Client( [port], [host] );

var connectionUsers = {};

var port = process.env.PORT || '3000';
var io = require('socket.io').listen( port )
io.on('connection', function(socket){
	console.log('a user connected');
	var socketId = socket.id;
	
	// cookieがない場合はdisconnect
	if( !socket.handshake.headers.cookie ){
		console.log('Invalid access');
		socket.disconnect();
		socket = null;
		return;
	}
	
	// cookie取得
	var signedCookie = cookie.parse( socket.handshake.headers.cookie );
	var sid = cparser.signedCookies( signedCookie, 'シークレットキー' )['connect.sid'];
	memd.get( sid, function( err, ses ){
		// 接続情報をconnectionUsersに格納
		var json = JSON.parse( ses );
		var user = json.user;
		connectionUsers[ socketId ] = user;
		user = null;
		json = null;
		broadcast.users( connectionUsers );
	} );
	
	socket.on('disconnect', function( res ){
		console.log('a user disconnect: ' + socketId);
		delete connectionUsers[ socketId ];
		broadcast.users( connectionUsers );
	});
});

var broadcast = {
	users	: function( connectionUsers ){
		var users = {};
		for( var socketId in connectionUsers ){
			var user = connectionUsers[ socketId ];
			users[ user.id ] = user;
		}
		io.sockets.emit( 'users', users );
	}
};
```

## Client
### factory.js
```javascript
angular.module('ngApp').factory('socket', function ($rootScope) {
	var socket = io.connect();
	return {
		on: function (eventName, callback) {
			socket.on(eventName, function () {  
				var args = arguments;
				$rootScope.$apply(function () {
					callback.apply(socket, args);
				});
			});
		},
		emit: function (eventName, data, callback) {
			socket.emit(eventName, data, function () {
				var args = arguments;
				$rootScope.$apply(function () {
					if (callback) {
						callback.apply(socket, args);
					}
				});
			})
		}
	};
});
```
### html
```html
<!DOCTYPE html>
<html lang="ja" ng-app="ngApp">
  <head>
    <script src="/socket.io/socket.io.js"></script>
    <script src="angular.js"></script>
    <script src="factory.js"></script>
    <script>
      var ngApp = angular.module('ngApp', []);
      angular.module('ngApp').controller('mainctrl', function( $scope, socket ){
        socket.on( 'users', function( users ){
          $scope.users = users;
        } )
      });
    </script>
  </head>
  <body controller="mainctrl">
    <pre style="font-size:12px">{{ users | json }}</pre>
  </body>
</html>
```
