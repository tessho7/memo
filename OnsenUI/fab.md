# バージョン２正式版にて`top`を指定すると隠れる問題に対応

## サンプル一部
```css
<style>
  ons-page .fab--top__right {
    top: 66px;
  }
</style>
```

## サンプル全体
```html
<ons-page>
  <ons-toolbar>
    <div class="center">Speed dial</div>
  </ons-toolbar>
  
  あいうえお
  
  <ons-speed-dial position="top right" direction="left">
    <ons-fab><ons-icon icon="md-share"></ons-icon></ons-fab>
    <ons-speed-dial-item><ons-icon icon="md-twitter"></ons-icon></ons-speed-dial-item>
    <ons-speed-dial-item><ons-icon icon="md-facebook"></ons-icon></ons-speed-dial-item>
    <ons-speed-dial-item><ons-icon icon="md-google-plus"></ons-icon></ons-speed-dial-item>
  </ons-speed-dial>
</ons-page>
<style>
  ons-page .fab--top__right {
    top: 66px;
  }
</style>
```
## もしくはこの方がいいかな？
```css
<style>
  ons-toolbar ~ .fab--top__right {
    top: 66px;
  }
</style>
```
