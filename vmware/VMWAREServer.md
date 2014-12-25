### メモリ関連

#### /etc/vmware/configに以下を追記
```text
tmpDirectory = "/dev/shm"
```

#### /path/to/*.vmxに以下を追記
```text
mainMem.useNamedFile = "FALSE"
```
