### ページのスクロール
- `$('.page__content', this)`が味噌
- `ons-row`を使っているとずれるっぽい
```javascript
$(document).on( 'pageinit', '#home-page', function() {
  // ページの一番下までスクロールしたかサンプル
  $('.page__content', this).off().on("scroll", function(){
  	console.log("change : "+this.scrollTop);
  	//スクロール最大値　==　スクロールエリアサイズ　+　スクロール値
  	if(this.scrollHeight <= this.clientHeight + this.scrollTop){
  	  console.log('scroll max: ' + this.scrollTop);
  	}
  	console.log({
  		scrollHeight	: this.scrollHeight,
  		clientHeight	: this.clientHeight
  	});
  });
} );
```

### `ons-page`内でのfixed
- できない
- と言うより、スクロールについていった上で、所定の場所に戻ってくる
- 時間ができたら調査する
- ひとまずの対策は下みたいにする(`ons-tabbar`を使っていたらその分調整)
```html
<ons-page>
  :
  <div id="spacer" style="height:例えば100px"></div>
</ons-page>
<div style="z-index:いっぱい;position:fixed;bottom:0;height:例えば100px">fixed!!</div>
```

### `ons-tabbar`の`page`を使わない
- 使っていると、navigatorを見失う？のか`pushPage`などできなくなる
- 余り調べる時間がかなったので、ひとまず`page`は消して、`ng-click`を設定、Javascriptで制御
