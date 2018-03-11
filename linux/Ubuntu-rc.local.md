### rc.localでrootユーザーでコマンド実行
- `su -l root -c`を付けて実行しないと起動しない
- crontabでも一緒(だったはず)
```bash
su -l root -c 'echo "コマンド実行"'
```
