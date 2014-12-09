### 環境
- ubuntu14.04

### Docker Engineインストール
``` bash
$ sudo apt-get install docker.io
```

### Dockerサービス有効化
```bash
$ sudo update-rc.d docker.io defaults
```

### root権限なしにDockerコマンド実行
ソケットファイル(/var/run/docker.sock)は`docker`グループなので、対象ユーザを`docker`へ参加させる
```bash
$ sudo gpasswd -a 対象ユーザID docker
```
してから、再度ログイン

### Docker Engineの情報確認
```bash
$ docker info
```

### 稼働状況確認
```bash
$ docker version
```

### Docker Imageダウンロード

#### Ubuntuイメージ最新版の場合
```bash
$ docker pull ubuntu:latest
```

### Docker Image一覧確認
```bash
$ docker images
```

### 実行
```bash
$ docker run -it --name ubuntu1 ubuntu /bin/bash
```
- 意味
	1. 標準入力を開、ttyを確保する
	2. 管理名に「ubuntu1」を指定
	3. Docker Image 「ubuntu」のlatestを使用
	4. 実行コマンドを「/bin/bash」で起動

#### 実行オプション
```
docker run [オプション] [--name ｛コンテナー名｝] ｛イメージ名｝[:｛タグ名｝] [コンテナーで実行するコマンド] [引数]
```
- オプション一部
	- -d：バックグラウンドで実行する
	- -i：コンテナーの標準入力を開く
	- -t：tty（端末デバイス）を確保する
	- -p：｛ホストのポート番号｝:｛コンテナーのポート番号｝
		- Dockerサーバーのホストとポートマッピングを構成
	- -v：ホストのフォルダをコンテナ側からマウント
		- ｛ホストのフォルダ｝:｛コンテナーのフォルダ｝

### 作成済コンテナの起動／停止
#### 起動
```bash
$ docker start コンテナ名
```
#### 停止
```bash
$ docker stop コンテナ名
```

### Dockerコンテナーの一覧
#### 全て
```bash
$ docker ps -a
```
#### 起動中
```bash
$ docker ps
```

### Docker Image作成
```bash
$ docker commit ubuntu1 tessho7/nginx
```
- 先ほどのnginxインストール済のubuntu1を、別イメージで保存
- `docker images`で確認

### 任意のイメージ詳細情報表示
```bash
$ sudo docker inspect REPOGITORY:TAG
```

### 任意のイメージ削除
```bash
$ sudo docker rmi REPOGITORY:TAG
```

### コンテナ操作
```bash
$ docker run -it ubuntu:latest /bin/bash
```

### コンテナのログをホスト側へ
nginxのログを`/tmp/docker_container`フォルダへ
```bash
$ docker run --name 好きな名前 -d -p 80:80 -v /tmp/docker_container:/var/log/nginx tessho7/nginx_on_ubuntu
```

### コンテナをまとめて削除
```bash
$ docker rm `docker ps -a -q`
```

### イメージ<none>をまとめて削除
```bash
$ docker rmi $(docker images | awk '/^<none>/ { print $3 }')
```

### コンテナからデータコピー
```bash
$ docker cp ddd629e6073f:/hoge/foo .
```

### イメージを移行
- エクスポート
```bash
$ docker export [IMAGE ID] > img.tar
```
- img.tarを別のサーバへコピー
- インポート
```bash
$ cat img.tar | docker import - REPOSITORY:TAG
```




## 注意
### ポートのバインドができない
何故か使用していないポートのバインドができない場合、dockerを再起動すると良いらしい  
ひとまずサーバ再起動したらバインドできるようになった
