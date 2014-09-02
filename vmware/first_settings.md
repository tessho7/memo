## vmxに追記する項目

**※両方とも停止状態で行う**

- BIOS表示時間設定

```sh
bios.bootDelay = "3000"
```

- 実メモリを使用

```sh
mainMem.useNamedFile = "FALSE"
MemTrimRate = "0"
```

- 最近のVMwarePlayerはvmware-vmx.exeのCPU使用率が高いので
```sh
isolation.tools.hgfs.notify.enable = "FALSE"
```
