### reduce

```javascript
// 配列hashを指定keyで、hashに変換
var _convertToHash = function(arr, key){
	return arr.reduce( function( hash, obj ){
		hash[ obj[ key ] ] = obj;
		return hash;
	}, {} );
};
```

- 使い方
```javascript
var hash = _convertToHash( [{id:'A', name='AAA'},{id:'B', name:'BBB'}], 'id' );
{
  A:{id:'A', name='AAA'},
  B:{id:'B', name:'BBB'}
}
```
