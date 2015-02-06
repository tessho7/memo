### 普通に読み込むと遅い
```css
<style type="text/css">
  @font-face {
    font-family : "grateWebFont";
    src         : url("[web-fontのurl]") format("web-fontのフォーマット");
  }
  body {
    font-famiry : "grateWebFont";
  }
</style>
```

### じゃ、あとで読み込んでみよう
```javascript
function lazyLoadFont(){
  var f = ''
    + '<style type="text/css">'
    + '  @font-face {'
    + '    font-family : "grateWebFont";'
    + '    src         : url("[web-fontのurl]") format("web-fontのフォーマット");'
    + '  }'
    + '  body {'
    + '    font-famiry : "grateWebFont";'
    + '  }'
    + '</style>'
  ;
  $('head').append( f );
}
$(window).load( lazyLoadFont );
```

### 新しい方法だけど対応クライアント少ない
```javascript
function lazyLoadFont(){
	if( document.fonts && FontFace ){
		var fontFace = new FontFace(
			'grateWebFont',
			'url("[web-fontのurl]") format("web-fontのフォーマット")'
		);
		fontFace.load().then(function( loadedFontFace ){
			document.fonts.add( loadedFontFace );
			document.body.style.fontFamily = 'grateWebFont';
		});
	}
}
$(window).load( lazyLoadFont );
```
