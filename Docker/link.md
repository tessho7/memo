### 同一ホスト内でのリンク

#### コンテナ通しのリンク
```bash
$ docker run --name test01 -e TEST_ABABA=ababa -itd centos bash
```
として、コンテナ(test01)を起動しておいて、--linkで確認
```bash
$ docker run --rm --name test02 --link test01:alias centos env | grep 'ALIAS_'
ALIAS_NAME=/test02/alias
ALIAS_ENV_TEST_ABABA=ababa
```
環境変数の確認ができた  

でも、perlから%ENVで取得できなかった。  
今回はリンク元(test01)のIPアドレスだけ分かれば良かったので、/etc/hostsに追記されているものを使用。  
以下で確認できる
```bash
$ docker run --rm --name test02 --link test01:alias centos bash -c "cat /etc/hosts" | grep alias
リンク元(test01)のIPアドレス     alias
```

#### 現在の知識では
- sshログインした場合、環境変数にセットされていないので、どのユーザ(tty)に対してのlinkなのか不明
- 環境変数の参照は、起動時か、exec、attachした場合のみ取得できる
  - linuxの環境変数周りの知識が乏しい
- perlなどwebアプリケーションからは、リンク元(test01)の環境変数の参照ができないので、hostsを使うしかない

コンテナ分けるのやめようかな
