### フォントをきれいに？
```javascript
( function(){
  document.body.style.fontFamily = 'none';
  document.body.style.textShadow = '0 0 .5px rgba(0,0,0,.2)';
})()
```
```javascript
javascript:(function(){document.body.style.fontFamily='none';document.body.style.textShadow='0 0 .5px rgba(0,0,0,.2)';})()
```

### フォントをきれいに？
```javascript
( function(){
  document.body.style.fontFamily = 'none';
  document.body.style.webkitTextStroke = '.5px';
  document.body.style.webkitTextStrokeColor = 'rgba(128,128,128,.5)'
})()
```
```javascript
javascript:(function(){document.body.style.fontFamily='none';document.body.style.webkitTextStroke='.5px';document.body.style.webkitTextStrokeColor='rgba(128,128,128,.5)'})()
```

### フォントサイズ変更(body)
```javascript
( function(){
  var s = prompt( "フォントサイズ？(px)" );
  s = s && isFinite( s ) && s + "px";
  document.body.style.fontSize = s;
})()
```
```javascript
javascript:(function(){var s=prompt("フォントサイズ？(px)");s=s&&isFinite(s)&&s+"px";document.body.style.fontSize=s;})()
```
