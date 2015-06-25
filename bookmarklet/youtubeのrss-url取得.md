### 必要
- Chrome(consoleに出力しているため)
- jQuery
- チャンネルのトップページ(他のページで動くかは試していない)
- かなり適当に作っているので動かなくなった時直す心

### 登録用
```javascript
javascript:var _fmt=function(id,name){var url='https://www.youtube.com/feeds/videos.xml?channel_id='+id;console.log([id,url,name].join(' / '))};_fmt($('button:visible', '.primary-header-contents').attr('data-channel-external-id'),document.title);$('[data-channel-external-id]', 'ul.branded-page-related-channels-list').each(function(){_fmt($(this).attr('data-channel-external-id'),$(this).parent().parent().parent().find('.yt-lockup-title').text())})
```

### 展開
```javascript
var _fmt = function( id, name ){
	var url = 'https://www.youtube.com/feeds/videos.xml?channel_id=' + id;
	console.log( [ id, url, name ].join( ' / ' ) )
};
_fmt(
	$( 'button:visible', '.primary-header-contents' ).attr( 'data-channel-external-id' ),
	document.title
);
$( '[data-channel-external-id]', 'ul.branded-page-related-channels-list' ).each(function(){
	_fmt(
		$( this ).attr( 'data-channel-external-id' ),
		$( this ).parent().parent().parent().find( '.yt-lockup-title' ).text()
	)
})
```
