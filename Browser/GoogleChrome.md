### 起動オプション
- キャッシュフォルダ指定: `--disk-cache-dir="Z:\Chrome"`

### アドレスバーの保管されるURLを個別に削除
アドレスバーに消したい対象が表示され、ハイライト中に以下コマンド
- Windows`shift + delete`
- Mac`shift + fn + delete`

### MacTypeを有効化
1. chrome://flags/
2. `DirectWrite を無効にする`項目を有効にする  
  ※項目直下のリンクが「無効にする」になっていれば有効になっている
3. chrome再起動

### 文字欠け
以下環境にて
- windows7
- mactype
- chrome

#### 試用中(今のところ問題なし)
- chrome://flagsから、"ワンコピー ラスタライザを有効にする"を無効に設定

#### 未確認(試用中問題が発生したら試す予定)
- chrome://flagsから、"GPU のラスター化を有効にする"を"無効"に設定
- 起動オプションに以下を設定
```text
--high-dpi-support=1 --force-device-scale-factor=1
```
