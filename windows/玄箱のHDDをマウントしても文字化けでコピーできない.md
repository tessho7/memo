## 概要

玄箱のHDD破損の際に困ったのでメモ  
そもそもWindowsから直接のアクセスは不可なので、VMwarePlayerを使用  
HDD自体が認識されていなかったので、`HDD Regenerator`で復旧した。  
中身が見えたので、別のHDDにデータ移行したいが、フォルダやファイル名が文字化けしており、コピーに失敗する  
**文字化け無しで別のHDDにコピーしたい**

## やったこと手順
1. 移行元HDDをWindowsに接続
2. ディスク管理にて、認識されているか確認
3. 見えていなかったので、`HDD Regenerator`を用い復旧
4. VMware Playerで、Ubuntuを起動
5. Ubuntuで移行元HDDをマウント
6. フォルダやファイルは見れるが、一部文字化けしている為  
rsync等、コピーも失敗する
7. sambaと、マウント用に以下をインストール
> sudo aptitude install samba  
> sudo aptitude install smbfs  

8. samba設定追記部分(smb.conf)  
> [global]  
> dos charset = CP932  
> unix charset = CP932  
> display charset = CP932  
>  
> [share]  
> path = 5で行ったマウント先  
> writeable = yes  
> force create mode = 0666  
> force create mode = 0777  
> guest ok = yes  
> guest only = yes  
9. samba再起動
10. sambaをマウント

これで、WindowsからもUbuntuからも文字化けせずアクセスできるようになりました。

## 補足
iconv忘れてました。  
rsyncについては、samba使わず、以下でもOK  
From 玄箱で使っていたHDD
### To windows
```bash
rsync -avzu --iconv=CP932,CP932 [from] [to]
```
###To linux
```bash
rsync -avzu --iconv=CP932,UTF-8 [from] [to]
```

## 補足２
NT系のwindowsの場合は、linuxと同じ形式で大丈夫らしい。  
[TO]がwindows7の場合は大丈夫でした。
```bash
rsync -avzu --iconv=CP932,UTF-8 [from] [to]
```

ただ、今回の場合、同じHDD内に、CP932とUTF-8のファイル名が混在していた為、  
結局、rsyncではなく、WinMerge等のWindows用ソフトで整合性取りました。
