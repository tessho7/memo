### 概要

簡易サーバ

ローカルでHTMLなど動作確認したい時に、同じようなものを作ることがあるので置いておく

### 注意

あまりテストはしてない。  
HTMLなどの動作だけ見るための物です。  
windowsだとサーバ立てるのが面倒なので。。。

### 使い方
```bash
$ node /path/to/app.js [ドキュメントルートパス(default:/path/to)] [ポート(default:3001)]
```

- cygwinの場合、`D:\path\to\ドキュメントルート`は`D:/path/to/ドキュメントルート`とする
- /cygdrive/で動く環境ならそのままでOK
- mime types は、mimeTypes.jsonに書いてあるので適宜追加
- そういえば、linuxで試してないことに気づいたので、その内試す
