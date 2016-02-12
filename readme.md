## mongodb
```bash
vim /etc/yum.repos.d/mongodb-org-3.2.repo
cat /etc/yum.repos.d/mongodb-org-3.2.repo
[mongodb-org-3.2]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.2/x86_64/
gpgcheck=0
enabled=1

yum -y update && yum -y install mongodb-org
```

### WARNING: soft rlimits too low.
```bash
vim /etc/security/limits.d/99-mongodb-nproc.conf
cat /etc/security/limits.d/99-mongodb-nproc.conf
mongod	   soft    nproc     64000
mongod	   hard    nproc     64000
```

### WARNING: /sys/kernel/mm/transparent_hugepage/～ is 'always'.
- WARNING: /sys/kernel/mm/transparent_hugepage/enabled is 'always'.
- WARNING: /sys/kernel/mm/transparent_hugepage/defrag is 'always'.

#### 設定
- 公式：https://docs.mongodb.org/manual/tutorial/transparent-huge-pages/
- vim /etc/init.d/disable-transparent-hugepages
```bash
#!/bin/sh
### BEGIN INIT INFO
# Provides:          disable-transparent-hugepages
# Required-Start:    $local_fs
# Required-Stop:
# X-Start-Before:    mongod mongodb-mms-automation-agent
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Disable Linux transparent huge pages
# Description:       Disable Linux transparent huge pages, to improve
#                    database performance.
### END INIT INFO

case $1 in
  start)
    if [ -d /sys/kernel/mm/transparent_hugepage ]; then
      thp_path=/sys/kernel/mm/transparent_hugepage
    elif [ -d /sys/kernel/mm/redhat_transparent_hugepage ]; then
      thp_path=/sys/kernel/mm/redhat_transparent_hugepage
    else
      return 0
    fi

    echo 'never' > ${thp_path}/enabled
    echo 'never' > ${thp_path}/defrag

    unset thp_path
    ;;
esac
```

- 実行権限付与
```bash
chmod 755 /etc/init.d/disable-transparent-hugepages
```

- 起動スクリプトに追加
```bash
chkconfig --add disable-transparent-hugepages
```

- nodejs - mongoose
```bash
npm install mongoose kerberos@"0.0.9" --save
```

