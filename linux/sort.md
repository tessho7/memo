### csvソート(カンマ区切り、ダブルクォーテーションなし)
- 指定カラムの値でソート
```bash
sort -t , -k 指定カラム(1～) source.csv
```
- 指定カラムの値を数値としてソート
```bash
sort -t , -k 指定カラム(1～) -n source.csv
```
