```javascript
var results = ( tweetText.match( /(^|\s)+(#\S+)/g ) || [] ).reduce( function( a, e ){
  a.push( e.replace(/\s/,'') );
  return a;
}, [] );
```

```javascript
(tweetText.match(/(^|\s)+(#\S+)/g)||[]).reduce(function(a,e){a.push(e.replace(/\s/,''));return a;},[]);
```

```javascript
(tweetText.match(/(^|\s)+(#\S+)/g)||[]).map( function(el){ return el.replace(/\s/, '') } );
```

うーん。。。
