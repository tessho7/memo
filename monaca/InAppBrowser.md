### システムのブラウザで開く
- window.open( link, '_system' );

### 内蔵ブラウザで開く
#### 全画面(アプリには戻れない)
- window.open( link, '_blank', 'location=no,presentationstyle=fullscreen,toolbar=no' );
#### 全画面＋ツールバー(ツールバーに、「完了」「戻る」「進む」がありアプリに戻れる)
- window.open( link, '_blank', 'location=no,presentationstyle=fullscreen,toolbar=yes' );
