## 概要

monacaを使った開発で困ったことや忘れそうなことを書く

### 画面傾き固定

#### Android
1. AndroidManifest.xmlを開く
2. android:screenOrientationの部分を確認
3. 縦＝portrait、横＝landscape、．．．など設定

#### iOS
1. MonacaApp-Info.plistを開く
2. key＞UISupportedInterfaceOrientations、UISupportedInterfaceOrientations~ipadを探す
3. 各対応する傾きが<array>内にあるので、必要な物のみ残す
```text
UIInterfaceOrientationPortraitのみにすると、縦固定
```

### selectタグ(と言うかタップの挙動)
- どうもOSのキーボードが表示された際、タップ位置がずれる(複数回呼ばれている？)様で、キーボードが閉じてしまう。
- `$(element).focus()`などでどうにかできないか試したが無理っぽい
- 根本的なところで、キーボード分WebViewの高さを変動させれば良いのかな？
  - と思ったけど、`codova-plugin-keyboard`や類似のものを試すが`undefined`で使えず
- WebView自体の安定を待つしか無いのかもしれない。
- つまり、ネイティブで作るか、monacaを使うなら、入力系は自作するか利用しない方が良さそう
