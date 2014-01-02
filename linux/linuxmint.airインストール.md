## LinuxMint15 64bitで、adobe airインストールしてみた

### ダウンロード
```sh
$ wget http://airdownload.adobe.com/air/lin/download/latest/AdobeAIRInstaller.bin
```

### 足りないものインストール
```sh
$ sudo aptitude install ia32-libs
```

### 64bitの場合、パス設定
```sh
$ sudo ln -s /usr/lib/i386-linux-gnu/libgnome-keyring.so.0 /usr/lib/libgnome-keyring.so.0
$ sudo ln -s /usr/lib/i386-linux-gnu/libgnome-keyring.so.0.2.0 /usr/lib/libgnome-keyring.so.0.2.0
```

### 実行
```sh
$ chmod +x AdobeAIRInstaller.bin
$ ./AdobeAIRInstaller.bin
```
