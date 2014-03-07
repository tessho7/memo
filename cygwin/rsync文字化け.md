### ファイル名にマルチバイトが含まれると文字化けする

linux->windowsや、windows->linuxのrsync時にマルチバイトは文字化けする
iconvオプションを使用し、回避

- windows->linux
```bash
rsync -avzu --iconv=CP932,UTF-8 [windows側] [linux側]
```

- linux->windows
```bash
rsync -avzu --iconv=UTF-8,CP932 [linux側] [windows側]
```

処理速度は遅くなる気がする
