## docker -> wordpress
1. 起動
```bash
sudo docker run -d -p 8000:80 --name=wordpress tutum/wordpress
```
2. 初期設定
3. wordpress更新の為、フォルダ所有者変更
```bash
sudo docker exec -it wordpress bash
chown -R www-data:www-data /app/
```
4. プラグイン追加
	- 「wordpress rest api」で検索し、「WordPress REST API (Version 2)」
5. 設定＞パーマリンクを「数字ベース」に変更
