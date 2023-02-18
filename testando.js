const allTextForParagraphys = () => {
	const paragraphyForWebDeployImportance = 'Descubra por que o desenvolvimento web é importante e como ele ajuda as empresas a alcançar seu público na internet.'

	const paragraphyForHTML = 'Aprenda o básico do HTML e como ele é usado para criar páginas da web.'

	const paragraphyForCSS = 'Entenda como o CSS é usado para adicionar estilo e layout às páginas HTML.'

	const paragraphyForJavaScript = 'Saiba como o JavaScript é usado para criar interatividade e dinamismo em páginas da web.'

	const paragraphyForBestPratices ='Conheça algumas das melhores práticas de desenvolvimento web para melhorar a experiência do usuário e o desempenho geral do site.'

	const textParagraphy = [

		paragraphyForWebDeployImportance,

		paragraphyForHTML,

		paragraphyForCSS,

		paragraphyForJavaScript,

		paragraphyForBestPratices
	]

	return textParagraphy
}

const paragraphys = allTextForParagraphys();

const paragraphyHTMLCardTwo = document.querySelectorAll('.cardTwoParagraphy')

const tittleHTMLCardTwo = document.querySelectorAll('.cardTwoTittle')

let textParagraphyLengths = paragraphys.map(() => Array.from(new Set([0])))

let timers = paragraphys.map(() => 0)

let isWriting = paragraphys.map(() => 0)

let isErasing = paragraphys.map(() => 0)

const writeParagraphyTwo = (index) => {
	const paragraphy = paragraphys[index]
	let inputTextParagraphyCardTwo = paragraphyHTMLCardTwo[index]
	isWriting[index] = true
	isErasing[index] = false

	timers[index] = setInterval(() => {
		if(textParagraphyLengths[index] < paragraphy.length) {
			inputTextParagraphyCardTwo.innerHTML += paragraphy[textParagraphyLengths[index]]
			textParagraphyLengths[index]++
		} else {
			clearInterval(timers[index])
			isWriting[index] = false
		}
	},75)
}

const eraseParagraphyCardTwo = (index) => {
	const paragraphy = paragraphys[index]
	let inputTextParagraphyCardTwo = paragraphyHTMLCardTwo[index]
	isWriting[index] = false
	isErasing[index] = true

	timers[index] = setInterval(() => {
		if(textParagraphyLengths[index] > 0) {

			inputTextParagraphyCardTwo.innerText = paragraphy.substring(0,textParagraphyLengths[index]-1)

			textParagraphyLengths[index]--
		} else {
			clearInterval(timers[index])
			isErasing[index] = false
		}
	},75)
}


const showHideParagraphyCardTwo = (index) => {
	if(isWriting[index]) {
		clearInterval(timers[index])
		eraseParagraphyCardTwo(index)
	}

	else if(isErasing[index]){
		clearInterval(timers[index])
		writeParagraphyTwo(index)
	}

	else if(paragraphyHTMLCardTwo[index].innerHTML == ''){
		writeParagraphyTwo(index)
	}
	else{
		eraseParagraphyCardTwo(index)
	}
}



const writingParagraphyTwo = () => {
	tittleHTMLCardTwo.forEach((tittle,index) => {
		tittle.addEventListener('click',() => {
			showHideParagraphyCardTwo(index)
		})
	})
}

writingParagraphyTwo()