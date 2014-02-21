### permission denied
rsyncなど使用した際、アクセスできなくなる場合があるのを回避

- /etc/fstab に以下を追記
```sh
none /cygdrive cygdrive binary,posix=0,user,noacl 0 0
```
