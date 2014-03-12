### ソースをutf8に統一する時困ったのでメモ

- 各ソースや関連ファイル、DBをutf8へ変換

- 各ソースに以下を追記しデコード
```perl
use utf8;
```

- 出力系処理時に、Encode.pmを使用しエンコード
```perl
use Encode qw/encode_utf8/;
：
print encode_utf8( [出力内容] );
```

- ファイル読込時、デコード
```perl
use open 'utf8';
：
my @lines = '';
if( open(IN, "[ファイルパス]") ){
	@lines = <IN>;
	close(IN);
}
```

- CGI.pmを使用したパラメータの受け取り時デコード
```perl
use Encode qw/decode_utf8/;
use CGI;
my $cgi = new CGI;
for my $prm( $q->param ){
	my @v = map {decode_utf8($_)} $q->param($prm);
	$q->param($prm,@v);
}
```

- mysql接続時、utf8デコードをデフォルトにする
```perl
my $attr = {
	mysql_enable_utf8 => 1,
	on_connect_do => [
		'SET NAMES utf8'
	]
};
my $dbh = DBI->connect(
	'DBI:mysql:[データベース名]:[サーバ名]:[ポート番号]',
	'ユーザ名',
	'パスワード',
	%$attr
);
```
