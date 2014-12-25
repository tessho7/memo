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

- コピペ用(他の項目も追加しているけども)
```text
MemTrimRate = "0"
mainMem.useNamedFile = "FALSE"
sched.mem.pshare.enable = "FALSE"
prefvmx.useRecommendedLockedMemSize = "TRUE"
MemAllowAutoScaleDown = "FALSE"
```

## CPUを複数使う場合以下を有効にする

### Intel - Intel XD Bit / Intel-VT
- Advanced > CPU Configuration >  Execute Disable Bit > [Enabled]   
- Advanced > CPU Configuration >  Intel(R) VirtualizationTechnology > [Enabled]

### AMD - AMD-V (AMD SVM)
- Advanced > CPU Configuration > SVM > [Enabled]
- Secure Virtual Machineかも
