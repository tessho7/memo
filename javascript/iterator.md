### 連番を返すイテレーター
- 1スタートのlength60の配列
```javascript
const iterator = Array.from(new Array(60)).map((v,i)=> i + 1).values()
```
