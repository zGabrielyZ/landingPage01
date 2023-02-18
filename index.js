let executeHoverLine = () => {
	let paragraphy = document.querySelectorAll('.headerNavParagraphy')

	let overHoverLine = () => {

		paragraphy.forEach(paragraphy => {
			paragraphy.addEventListener('mouseover',(e) => {
				const span = e.target.querySelector('.headerNavSpan')
				if(span) span.style.width = '20px'
				
			})
		})
	}

	let downHoverLine = () => {

		paragraphy.forEach(paragraphy => {
			paragraphy.addEventListener(	'mouseout',(e) => {
				const span = e.target.querySelector('.headerNavSpan')
				if(span) span.style.width = '0'
				
			})
		})
	}

	let hoverLine = () => {
		overHoverLine()
		downHoverLine()
	};hoverLine()
};executeHoverLine()

