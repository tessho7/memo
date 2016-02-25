app.config(	function( conf ){
	console.log( 'config', arguments );
});

app.constant( 'conf', {
	site	: {
		name	: 'example.com'
	},
	server	: {
		base	: 'http://localhost',
		conf	: '/conf.json'
	},
	geo		: {
		items		: {
			latitude			: '緯度',
			longitude			: '経度',
			altitude			: '高度',
			accuracy			: '緯度・経度の正確性',
			altitudeAccuracy	: '高度の正確性',
			heading				: '方位',
			speed				: '速度'
		},
		errorString	: [
			'',
			'位置情報の取得が許可されませんでした。',
			'位置情報の取得に失敗しました。',
			'タイムアウトしました。'
		],
		options		: {
//			enableHighAccuracy	: true,			// 正確な位置情報取得
			timeout				: 30000,		// タイムアウト
			maximumAge			: 60000			// キャッシュ有効期間
		},
		default		: {
			coords: {
				latitude	: 0,
				longitude	: 0
			}
		}
	},
	images	: {
		resize	: {
			maxWidth	: 240,
			maxHeight	: 240
		}
	},
	gender	: {
		text	: [ '', '男性', '女性' ],
		icon	: [ '', '<i class="fa ion-male"></i>', '<i class="fa ion-female"></i>' ],
		color	: [ '', 'skyblue', 'pink' ]
	},
	pulldown	: {},
} );
