### HTMLの何かとリスト(HTMLCollectionを配列化しているだけ)
- document.links
```javascript
Array.prototype.forEach.call( document.links, function( item ){ console.log( item ) } )
```

- document.images
```javascript
Array.prototype.forEach.call( document.images, function( item ){ console.log( item ) } )
```

- document.forms
```javascript
Array.prototype.forEach.call( document.forms, function( item ){ console.log( item ) } )
```

- document.scripts
```javascript
Array.prototype.forEach.call( document.scripts, function( item ){ console.log( item ) } )
```
