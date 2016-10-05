### CentOS

#### 64bit
```bash
rpm -ivh http://ftp.riken.jp/Linux/fedora/epel/6/x86_64/epel-release-6-8.noarch.rpm
```

#### 32bit
```bash
rpm -ivh http://ftp.riken.jp/Linux/fedora/epel/6/x86_64/epel-release-6-8.noarch.rpm
```

### Install
```bash
yum install nodejs npm
```

### Ubuntu14.04
```bash
sudo apt-get install nodejs npm
```
上記だと、`node`では無く`nodejs`でインストールされるので
```bash
sudo apt-get install nodejs nodejs-legacy npm
```
`nodejs-legacy`を入れ、シンボリック作成(`/usr/bin/node -> nodejs`)

### npm
```bash
sudo npm install -g npm forever express-generator marked
```

### test
```
node -e "require('http').createServer(function(req,res){res.end('OK')}).listen(3001)"
```
