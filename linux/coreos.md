### IPアドレス固定化

#### 試した環境は、VMwarePlayer on Windows7
```
 #cloud-config
 
+write_files:
+  - path: /etc/systemd/network/10-host-only.network
+    content: |
+      [Match]
+      Name=ens192
+      
+      [Network]
+      Address=固定IPアドレス/24
+      Gateway=ゲートウェイ
+      DNS=8.8.8.8
+      DNS=8.8.4.4
+
 ssh_authorized_keys:
```

で、再起動を２回したら反映された
