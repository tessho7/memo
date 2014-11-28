# Sublime Text #

## 何はなくとも、Package Control ##
>
- [Sublime Text 2 Package Controlインストール](https://sublime.wbond.net/installation#st2)
- [Sublime Text 3 Package Controlインストール](https://sublime.wbond.net/installation#st3)

## Package Controlを使って入れているもの ##
- IMESupport(windowsの場合)
> これを入れないとマルチバイト入力の時に・・・えっと、困る

- LineEndings
> 現在編集中のファイルの改行コードを表示(LF:Unix,CR:Mac,CRLF:Windows)

- Theme - FlatLand
> このテーマがすき

- Solarized Color Scheme
>
これは有名。色合いが好き  
ちなみに標準でも入っているけど、そちらとは少々違う

- Japanize
>
メニューが日本語になる  
全てではないけど、やっぱり日本語の方が見つけやすい

>- 日本語化手順
```text
1. Package Controlをインストール
2. Package Controlで「japanize」をインストール
3. sublime text3の「Data\Packages」フォルダ配下に「Default」フォルダを作成
4. 「Data\Packages\Japanaze\*.jp」を3のフォルダへコピーし、ファイル名から「.jp」を消す
```

- ColorSchemeSelector
> 色々カラースキーマカラースキーマを試したいときに重宝  

- OmniMarkupPreviewer
> markdownを書いている時リアルタイムに変換、ブラウザに表示してくれる

- ConvertToUTF8
>
Shift_JISを扱う場合があったので入れた  
自動判別で、読込時UTF8へ変換し、保存時元のエンコードで出力してくれる  
たまに間違う  
保存の際ラグがあり、即アップロードなど行うと変換が間に合っていないことがあるのでのんびりと


## 私の設定 ##
```json
{
	"color_scheme": "Packages/Solarized Color Scheme/Solarized (dark).tmTheme",
	"default_line_ending": "unix",
	"draw_white_space": "all",
	"flatland_square_tabs": true,
	"font_face": "Ricty",
	"font_size": 8,
	"highlight_line": true,
	"highlight_modified_tabs": false,
	"ignored_packages":
	[
		"Vintage"
	],
	"indent_subsequent_lines": true,
	"show_encoding": true,
	"tab_completion": false,
	"theme": "Flatland Dark.sublime-theme",
	"trim_automatic_white_space": false,
	"word_wrap": false,
	"wrap_width": 0
}
```

## sublime-keymap(キーバインド標準)
- タブを押した際、タブではなく補完が動いてしまう為、無効化
```json
//	{ "keys": ["tab"], "command": "insert_best_completion", "args": {"default": "\t", "exact": true} },
//	{ "keys": ["tab"], "command": "insert_best_completion", "args": {"default": "\t", "exact": false},
//		"context":
//		[
//			{ "key": "setting.tab_completion", "operator": "equal", "operand": true }
//		]
//	},
```
