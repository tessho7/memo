### my.conf
- 以下を追記
```
[mysqld]
character-set-server=utf8
skip-character-set-client-handshake

[mysqldump]
default-character-set=utf8

[mysql]
default-character-set=utf8

[client]
default-character-set=utf8
```

### 確認
```sql
show variables like "char%";
```
