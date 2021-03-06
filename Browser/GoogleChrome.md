### 起動オプション
- キャッシュフォルダ指定: `--disk-cache-dir="Z:\Chrome"`
- タブやブックマークにも: `--disable-directwrite-for-ui`

### アドレスバーの保管されるURLを個別に削除
アドレスバーに消したい対象が表示され、ハイライト中に以下コマンド
- Windows`shift + delete`
- Mac`shift + fn + delete`

### リスタート
ブックマークに以下ページを追加して選択で開いているタブはそのままにリスタート
- `chrome://restart`

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

#### 2015/09/18現在(chrome version=45)
文字かけが時々発生している為、以下設定で試用中
- chrome://flagsから、"ワンコピー ラスタライザを有効にする"を無効に設定
- chrome://flagsから、"GPU のラスター化を有効にする"を"無効"に設定

#### 2015/09/18直後ダメだったので、以下を試す
- chrome://flagsから、"ワンコピー ラスタライザを有効にする"を無効に設定
- chrome://flagsから、"GPU のラスター化を有効にする"を"無効"に設定
- MacTypeをレジストリモードからサービスモードへ

#### 2015/09/18ダメダメだったので、以下を試す
もう文字が太字だったり細字だったりぐちゃぐちゃ。文字欠けどころの騒ぎではない。
- chrome://flagsから、"ワンコピー ラスタライザを有効にする"を無効に設定
- chrome://flagsから、"GPU のラスター化を有効にする"を"無効"に設定
- MacTypeをレジストリモードからサービスモードへ
- chrome://flags/#num-raster-threadsでスレッド数を１にする

#### 未確認(試用中問題が発生したら試す予定)
- 起動オプションに以下を設定
```text
--high-dpi-support=1 --force-device-scale-factor=1
```

#### 新しく設定してみた
- chrome://flags/#top-chrome-md
  - Normal
