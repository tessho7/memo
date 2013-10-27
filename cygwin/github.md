# 初期設定

## SSH公開鍵の登録

### 鍵作成
```sh
ssh-keygen -t rsa -C "[githubで使用しているメールアドレス]"
```

### 公開鍵コピー
```sh
clip < ~/.ssh/id_rsa.pub
```

### 公開鍵をgithubへ登録
1. Account Setting
2. SSH Keys
3. 「Add SSH Key」ボタンクリック
4. 公開鍵登録

### 秘密鍵を登録(この操作は良く分かってない)
```sh
eval `ssh-agent`
ssh-add $HOME/.ssh/id_rsa
eval `ssh-agent -k`
```
もしくは
```sh
vim ~/.ssh/config
Host github.com
  User githubユーザーID
  Port 22
  IdentityFile ~/.ssh/id_rsa
```
でも良いと思う。  
その内確認。


