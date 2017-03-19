```javascript
var results = tweetText.match( /(^|\s|\r?\n)+(#[^\s]+)/g ).reduce( function( a, e ){
  a.push( e.replace(/\r?\n/,'' ) );
  return a;
}, [] );
```

```javascript
tweetText.match( /(^|\s|\r?\n)+(#[^\s]+)/g ).reduce( function(a,e){ a.push( e.replace(/\r?\n/,'' ) );return a; }, [] );
```
