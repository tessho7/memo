var app = angular.module( 'app', [] );
app.run( function( $rootScope, conf ){
	console.log( 'run', arguments );
	// 紐付け
	$rootScope.conf = conf;
	// Utils
	$rootScope.Utils = {
		Math	: Math,
		Number	: Number
	};
} );
