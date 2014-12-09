### 編集するファイル
/usr/share/oem/cloud-config.yml

### IPアドレス固定化

#### 試した環境は、VMwarePlayer on Windows7
```diff
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

### コンテナ自動起動

#### CoreOS再起動時にコンテナが起動するように設定
```diff
 #cloud-config
 
+coreos:
+  units:
+    - name: NAMES.service
+      command: start
+      content: |
+        [Unit]
+        Description=CentOS Container
+        Ahther=tessho7
+        After=docker.service
+        
+        [Service]
+        Restart=always
+        ExecStart=/usr/bin/docker start -a NAMES
+        ExecStop=/usr/bin/docker stop -t 2 NAMES
+
 write_files:
   - path: /etc/systemd/network/10-host-only.network
     content: |
```
