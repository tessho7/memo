## 登録用
```javascript
javascript:var _elem = document.createElement('script');_elem.src='http://[cdnや自前サーバに置いたjqueryのURL]';document.getElementsByTagName('head').item(0).appendChild(_elem);
```

## 展開
```javascript
// scriptタグ作成
var _elem = document.createElement('script');
// scriptタグのSRC設定
_elem.src='http://[cdnや自前サーバに置いたjqueryのURL]';
// domに追加
document.getElementsByTagName('head').item(0).appendChild(_elem);
```
