### セットアップ
1. yum install -y nodejs npm
1. npm -g update npm
1. npm install -g n forever express-generator

### よく使う
1. npm install --save date-utils
1. npm install --save async
1. npm install --save express-session
1. npm install --save express-partials
1. npm install --save multer
1. npm install --save mysql
1. npm install --save connect-memcached
1. npm install --save mongoose kerberos@"0.0.9"
1. npm install --save mime
1. npm install --save uuid
1. npm install --save async

### n によるnodejsバージョン切替
- Stableの確認
```bash
n --stable
```
- Latestの確認
```bash
n --latest
```
- バージョン一覧
```bash
n ls
```
- インストール／バージョン切替
```bash
n [latest | x.x.x(バージョン)]
```

### モジュール更新確認(`yum check-update`みたいなの)
`-g`をつけるとグローバル
```bash
npm outdated [-g]
```
