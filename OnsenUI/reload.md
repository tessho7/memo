### v2.rc1 + AngularJS v1
```html
<ons-navigator var="navi" ...></ons-navigator>
```

```javascript
module.controller( 'ToolbarController', function(){
	this.reload = function( page, data ){
		page = page || navi.topPage.pushedOptions.page;
		data = data || navi.topPage.pushedOptions.data;
		// animationがslideだと視覚的に意味合いがずれるため、一旦fadeに変更
		navi.replacePage( page, { data: data, animation: 'fade' } ).then( function(){
			navi.topPage.pushedOptions.animation = 'slide';		// animationをfadeからslideにリセット
		} );
	}
} );
```
