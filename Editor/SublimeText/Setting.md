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

- Solalized Color Scheme
>
これは有名。色合いが好き  
ちなみに標準でも入っているけど、そちらとは少々違う

- Japanize
>
メニューが日本語になる  
全てではないけど、やっぱり日本語の方が見つけやすい

## 私の設定 ##
```json
{
	"auto_complete_commit_on_tab"	: true,
	"color_scheme"					: "Packages/Solarized Color Scheme/Solarized (dark).tmTheme",
	"default_line_ending"			: "unix",
	"draw_white_space"				: "all",
	"flatland_square_tabs"			: true,
	"font_face"						: "TakaoGothic",
	"font_size"						: 10.0,
	"highlight_line"				: true,
	"highlight_modified_tabs"		: false,
	"ignored_packages"				: [
		"Vintage"
	],
	"indent_subsequent_lines"		: true,
	"tab_completion"				: false,
	"theme"							: "Flatland Dark.sublime-theme",
	"trim_automatic_white_space"	: false,
	"word_wrap"						: false,
	"wrap_width"					: 0
}
```