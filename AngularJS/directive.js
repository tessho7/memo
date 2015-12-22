// input type=dateのng-model置換
angular.module('ngApp').directive('dateToString', function( dateFilter ){
	return {
		require	: 'ngModel',
		link	: function( scope, element, attrs, ngModel ){
			ngModel.$parsers.push( function( value ){
				return dateFilter( value, 'yyyy-MM-dd' );
			} );
			ngModel.$formatters.push( function( value ){
				return new Date( value );
			} );
		}
	};
});
// テキストエリアリサイズ(別途textareaにmin-heightを設定)
angular.module('ngApp').directive('resizeTextarea', function( dateFilter ){
	var ajast = function( element ){
		element.css( 'height', ( $( element ).val().split( '\n' ).length + 2 ) + 'em' );
		element.css( 'height', ( element[0].scrollHeight + 2 ) + 'px' );
	}
	return {
		require	: 'ngModel',
		link	: function( scope, element, attrs, ngModel ){
			element.on('input', function( e ){ ajast( element ); });
			scope.$watch( attrs.ngModel, function( n, o ){ ajast( element ); } );
		}
	};
});
