app.controller( 'main', function( $scope, $http, conf, myFactory ){
	console.log( 'controller', conf );
	
	$http.get( conf.server.base + conf.server.conf ).then( function( res ){
		if( res.data.err ){ throw res; }
		console.log( 'done: ', res );
		angular.merge( conf, res.data );
		
		// ページ設定
		document.title = conf.site.name;
		
	} ).catch( function( res ){
		console.log( 'fail: ', res );
	} );
	
} );
