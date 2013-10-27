## 使用ライブラリ
- [jQuery](http://jquery.com/)
- [tablesorter](http://tablesorter.com/docs/)

## 注意点
- jquery.tablesorter.min.jsとcss/style.cssは、ご自身のサーバに置いて使用してください。

## 登録用
```javascript
javascript:console.log('start');window._one = function(){$('table').each(function(){var _target = {m:$(this).addClass('tablesorter'), h:$('thead', this)};var _thead = _target.h.html();_target.h.html( _thead.replace(/td/g, 'th') );_target.m.tablesorter();});console.log('OK');};$.getScript('https://dl.dropboxusercontent.com/u/48949561/js/tablesorter/jquery.tablesorter.min.js', function(){$('head').append('<link rel="stylesheet" href="https://dl.dropboxusercontent.com/u/48949561/js/tablesorter/css/style.css" onload="window._one()" />');});
```

## 展開
```javascript
console.log('start');
window._one = function(){
	$('table').each(function(){
		var _target = {
			m	: $(this).addClass('tablesorter'),
			h	: $('thead', this)};
			var _thead = _target.h.html();
			_target.h.html( _thead.replace(/td/g, 'th') );
			_target.m.tablesorter();
		});
		console.log('OK');};
		$.getScript('https://dl.dropboxusercontent.com/u/48949561/js/tablesorter/jquery.tablesorter.min.js',
			function(){
				$('head')
					.append(''
						+ '<link'
						+ ' rel="stylesheet"'
						+ ' href="https://dl.dropboxusercontent.com/u/48949561/js/tablesorter/css/style.css"'
						+ ' onload="window._one()"'
						+ ' />'
					)
				;
		});
```
