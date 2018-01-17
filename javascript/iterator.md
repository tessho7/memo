### 連番を返すイテレーター
- 1スタートのlength60の配列
```javascript
const iterator = Array.from(new Array(60)).map((v,i)=> i + 1).values()
```
```javascript
const iterator = Array.from({ length: 60 }, (_, i) => i + 1).values()
```
- 0スタートのlength60の配列
```javascript
const iterator = Array(60).keys()
```
- ジェネレータ関数を定義
  - 指定した範囲の整数列のイテレータを返す
```javascript
function* range (begin, end, interval = 1) {
  for (let i = begin; i < end; i += interval) {
    yield i;
  }
}
```
