### 連番を返すイテレーター
- 1スタートのlength60の配列
```javascript
const iterator = Array.from(new Array(60)).map((v,i)=> i + 1).values()
```
```javascript
const iterator = Array.from({ length: 60 }, (_, i) => i + 1).values()
```
```javascript
const iterator = Array(60).keys()
```
