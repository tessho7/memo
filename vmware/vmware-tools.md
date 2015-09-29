### CentOS6.7-minimal
```bash
yum -y update yum && yum -y install epel-release && yum -y update && yum -y upgrade
yum -y groupinstall "Development Tools"
:
yum -y install fuse-libs
:
echo | ./vmware-install.pl
```

結局色々入れるならゴニョゴニョですが。。。
