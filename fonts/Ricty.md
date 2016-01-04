### Ricty生成

#### Rictyダウンロード
```bash
yum install wget
midir Ricty
cd Ricty
wget https://github.com/yascentur/Ricty/archive/master.zip
unzip master.zip 
```

#### Inconsolata(ttf)ダウンロード
```bash
wget https://github.com/google/fonts/blob/master/ofl/inconsolata/Inconsolata-Bold.ttf?raw=true -O Inconsolata-Bold.ttf
wget https://github.com/google/fonts/blob/master/ofl/inconsolata/Inconsolata-Regular.ttf?raw=true -O Inconsolata-Regular.ttf
```

#### Migu(ttf)ダウンロード
```bash
wget "http://osdn.jp/frs/redir.php?m=iij&f=%2Fmix-mplus-ipa%2F63545%2Fmigu-1m-20150712.zip" -O migu-1m-20150712.zip
unzip migmix-1m-20150712.zip 
```

#### Inconsolata/Miguインストール
```bash
mkdir /usr/share/fonts/Inconsolata
mkdir /usr/share/fonts/migu
find . -name 'Inconsolata-*.ttf' -exec cp -av {} /usr/share/fonts/Inconsolata/ \;
find . -name 'migu-*.ttf' -exec cp -av {} /usr/share/fonts/migu/ \;
```

#### 反映/確認
```bash
fc-cache -fv
fc-list | grep 'Inconsolata'
fc-list | grep 'Migu'
```

#### Ricty生成
```bash
cd Ricty-master/
./ricty_generator.sh -z auto
```

#### windows用にフォントの間隔を広げる
```bash
./misc/os2version_reviser.sh Ricty-*.ttf RictyDiscord-*.ttf
```

### メモ
- スペースを可視化しない
```bash
$ ./ricty_generator.sh -z auto
```

- 文字の間隔を近づける
```bash
$ misc/os2version_reviser.sh Ricty-*.ttf RictyDiscord-*.ttf
```
