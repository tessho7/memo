### AngularJSでformのリセット(再利用)
- 値のリセットはできるが、invalidになっている項目がリセットできなかった。
- `ng-disabled="form.$invalid"`なんてしていると一生押せない
- `$setValidity()`を利用するとリセットはされ、ボタンも押せるが、２度とバリデーションしてくれない

- scope.forms.formOneがformとすると以下のようにリセット
```javascript
// エラー項目がある場合、keyにエラー種別で、配列で各項目のオブジェクトが入っている
// エラーの場合、ngModelに入力値は反映しないのでリセットできない
// その為以下のように初期値を設定することでエラー状態を解除する(今回の場合は`null`)
for( var key in scope.forms.formOne.$error ){
	scope.forms.formOne.$error[ key ].forEach( function( row ){
		row.$setViewValue( null );
	} );
}
// 入力状態(focusなど)で色分けしている場合は、未選択状態にする
scope.forms.formOne.$setUntouched();
```
