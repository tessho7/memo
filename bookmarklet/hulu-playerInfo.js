// 作りかけ
(function huluInfo() {
	const id = 'playZero'
	document.getElementById(id) && document.getElementById(id).remove()
	const div = document.createElement("div")
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

	// 秒→分、秒
	const splitSeconds = function(second){
		return {
			hour: Math.floor(second / 3600),
			min: Math.floor(second / 60) % 60,
			sec: Math.floor((second % 60) % 60)
		}
	}
	const printSeconds = function(splitSeconds){
		return [
			('00' + splitSeconds.hour).slice(-2),
			('00' + splitSeconds.min).slice(-2),
			('00' + splitSeconds.sec).slice(-2)
		].join(':')
	}

	// 再生位置を表示
	const player = document.getElementById('player_html5_api')
	const display = function(){
		const current = printSeconds(splitSeconds(player.currentTime))
		const duration = printSeconds(splitSeconds(player.duration))
		const percent = ((player.currentTime / player.duration) * 100).toFixed(0)
		div.innerHTML = `${current} / ${duration}(${percent}%)`
	}
	player.removeEventListener('timeupdate', display, false)
	player.addEventListener('timeupdate', display, false)
})()
