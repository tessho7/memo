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
