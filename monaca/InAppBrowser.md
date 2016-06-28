### システムのブラウザで開く
```javascript
window.open( link, '_system' );
```

### 内蔵ブラウザで開く

#### 全画面(アプリには戻れない)
```javascript
window.open( link, '_blank', 'location=no,presentationstyle=fullscreen,toolbar=no' );
```

#### 全画面＋ツールバー(ツールバーに、「完了」「戻る」「進む」がありアプリに戻れる)
```javascript
window.open( link, '_blank', 'location=no,presentationstyle=fullscreen,toolbar=yes' );
```
