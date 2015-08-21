### １つの画像からマルチアイコン作成
- 作成
```sh
convert 元画像 -define icon:auto-resize favicon.ico
```
- 確認
```sh
identify favicon.ico
```
### 画像サイズ変更(横320px、縦自動、png→jpg)
```sh
convert -resize 320x -unsharp 2x1.4+0.5+0 -colors 256 -quality 80 -verbose source.png dist.jpg
```
