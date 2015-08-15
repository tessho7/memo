```bash
cat ログ | awk 'BEGIN{FS="\" \""}{print($2)}' | sort | uniq
```

だけ
