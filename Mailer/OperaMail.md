### メーラ機能のみ分離したものらしい

- 軽いので乗り換えようかと試用中
- 終了時数分待たされるのがネック

### 初期設定

#### TBからの移行
- prefs.jsを指定する方法だと読み取れなかった
- 「一般的な mbox ファイルをインポート」からフォルダを指定してインポート
- imapで設定するとインポートはできなかった
  - 方法はあるのかも

#### Message-IDにPCのホスト名が設定されてしまう
- profile>mail>accounts.iniの[AccountXX]に以下を追加(XXは数字)
```
Fqdn=hostname
```
こうすると「Message-ID: ～@hostname」となる

古い情報だったけど動作した

### 暫く使ってみて

#### 問題点

- 送信済メールを「編集」で開いた際、編集画面が開いたと同時に送信されてしまうことが数回あった  
編集画面はそのまま開いていたので、誤って送信ボタンを押したわけでは無いみたい(バグ？再現方法不明)
- 終了が遅い場合が多い。場合によっては数時間終了しない(プロセスに残っている)こともある  
※メモリ、HDDチェック問題なし。そもそもOperaMailでのみの現象

問題点以外の部分では軽いし、検索も早いので重宝していた。

ただ、問題点の部分が致命的なのでTBに戻る

