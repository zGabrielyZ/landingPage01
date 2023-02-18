const tittleCardTwo = document.querySelectorAll('.cardTwoTittle');
	const paragraphysCardTwo = [  
		'Descubra por que o desenvolvimento web é importante e como ele ajuda as empresas a alcançar seu público na internet.',
	  	'Aprenda o básico do HTML e como ele é usado para criar páginas da web.',
	  	'Entenda como o CSS é usado para adicionar estilo e layout às páginas HTML.',
	  	'Saiba como o JavaScript é usado para criar interatividade e dinamismo em páginas da web.',
	  	'Conheça algumas das melhores práticas de desenvolvimento web para melhorar a experiência do usuário e o desempenho geral do site.'
	  	];
	const cardTwoParagraphy = document.querySelectorAll('.cardTwoParagraphy');

	let currentTextLengths = [0, 0, 0, 0, 0];
	let timers = [null, null, null, null, null];
	let isWriting = [false, false, false, false, false];
	let isErasing = [false, false, false, false, false];

	const writeParagraphyCardTwo = (index) => {
	  const paragraphy = paragraphysCardTwo[index];
	  const inputTextCardTwo = cardTwoParagraphy[index];
	  isWriting[index] = true;
	  isErasing[index] = false;

	  timers[index] = setInterval(() => {
	    if (currentTextLengths[index] < paragraphy.length) {
	      inputTextCardTwo.innerHTML += paragraphy[currentTextLengths[index]];
	      currentTextLengths[index]++;
	    } else {
	      clearInterval(timers[index]);
	      isWriting[index] = false;
	    }
	  }, 50);
	};

	const eraseParagraphyCardTwo = (index) => {
	  const paragraphy = paragraphysCardTwo[index];
	  const inputTextCardTwo = cardTwoParagraphy[index];
	  isErasing[index] = true;
	  isWriting[index] = false;

	  timers[index] = setInterval(() => {
	    if (currentTextLengths[index] > 0) {
	      inputTextCardTwo.innerHTML = paragraphy.substring(0, currentTextLengths[index] - 1);
	      currentTextLengths[index]--;
	    } else {
	      clearInterval(timers[index]);
	      isErasing[index] = false;
	    }
	  }, 50);
	};

	const showHideParagraphyCardTwo = (index) => {
	  if (isWriting[index]) {
	    clearInterval(timers[index]);
	    eraseParagraphyCardTwo(index);
	  } else if (isErasing[index]) {
	    clearInterval(timers[index]);
	    writeParagraphyCardTwo(index);
	  } else if (cardTwoParagraphy[index].innerHTML === '') {
	    writeParagraphyCardTwo(index);
	  } else {
	    eraseParagraphyCardTwo(index);
	  }
	};

	const writingParagraphyTwo = () => {
	  tittleCardTwo.forEach((tittle, index) => {
	    tittle.addEventListener('click', (e) => {
	      showHideParagraphyCardTwo(index);
	    });
	  });
	};

	writingParagraphyTwo();