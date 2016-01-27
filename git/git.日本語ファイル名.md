### git statusで日本語ファイル名文字化け
```bash
git config --global core.quotepath false
```

### mac 日本語ファイル名文字化け
- cloneしたてで差分があるとか
```bash
git config --global core.precomposeunicode true
```

### git log で文字化け
```bash
git config --global core.pager "less -c | nkf -w"
```

### commit時のエディタ設定
```bash
git config --global core.editor 'vim -c "set fenc=utf-8"'
```

### 色付け
```bash
git config --global core.color.ui true
```
