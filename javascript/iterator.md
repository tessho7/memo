### 連番を返すイテレーター
- 1スタートのlength60の配列
```javascript
var iterator = Array.from(new Array(60)).map((v,i) => i + 1).values()
```
