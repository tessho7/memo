// 作りかけ
(function () {
	// 定義
	const id = 'playZero'
	const player = document.getElementById('player_html5_api')
	const div = document.createElement('div')
	// 秒→分、秒
	const splitSeconds = function(second = 0) {
		if (isNaN(second)) {
			second = 0
		}
		return {
			hour: Math.floor(second / 3600),
			min: Math.floor(second / 60) % 60,
			sec: Math.floor((second % 60) % 60)
		}
	}
	const printSeconds = function(splitSeconds) {
		return [
			('00' + splitSeconds.hour).slice(-2),
			('00' + splitSeconds.min).slice(-2),
			('00' + splitSeconds.sec).slice(-2)
		].join(':')
	}
	const getPercent = function(current, duration) {
		if (isNaN(current) || isNaN(duration)) { return 0 }
		return (current / duration * 100).toFixed(0)
	}
	// 再生位置を表示
	const display = function() {
		const current = printSeconds(splitSeconds(player.currentTime))
		const duration = printSeconds(splitSeconds(player.duration))
		const percent = getPercent(player.currentTime, player.duration)
		div.innerHTML = `${current} / ${duration}(${percent}%)`
	}
	// 初期化
	player.removeEventListener('timeupdate', display, false)
	document.getElementById(id) && document.getElementById(id).remove()
	// 描画
	document.body.appendChild(div)
	div.id = id
	div.style.position = 'fixed'
	div.style.right = div.style.bottom = 0
	div.style.backgroundColor = 'rgba(128, 128, 128, 0.5)'
	div.style.color = 'white'
	div.style.fontSize = '10px'
	div.style.padding = '.2em'
	div.style.border = 'solid white 1px'
	div.innerHTML = ''
	// イベント
	player.addEventListener('timeupdate', display, false)
})()
