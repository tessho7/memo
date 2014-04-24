### インストールするぞ！
```sh
cpanm DBD::mysql
```
入らなかった。。。

### じゃ、これで！
```sh
yum -y install perl-DBD-mysql
```
あ！入ってるっぽい

### でもなんかcpanで入れたい気分
```sh
yum -y install mysql-devel
cpanm DBD::mysql
```
入った！！！

mysqlのconfigファイルが見つからない的なことっぽいけど、ひとまず入ったのでOKとします。
