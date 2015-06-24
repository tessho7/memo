### git statusで日本語ファイル名文字化け
```sh
git config --global core.quotepath false
```

### mac 日本語ファイル名文字化け
- cloneしたてで差分があるとか
```sh
git config --global core.precomposeunicode true
```
