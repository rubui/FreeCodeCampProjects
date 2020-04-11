document.addEventListener('DOMContentLoaded', () =>{
	
	const cardsAvailable = [
		{
			name: 'circle',
			img: 'img/circle.png'
		},

		{
			name: 'heart',
			img: 'img/heart.png'
		},

		{
			name: 'oval',
			img: 'img/oval.png'
		},

		{
			name: 'rect',
			img: 'img/rect.png'
		},

		{
			name: 'square',
			img: 'img/square.png'
		},

		{
			name: 'star',
			img: 'img/star.png'
		}
	]

	const cardArray = [
		{
			name: 'circle',
			img: 'img/circle.png'
		},

		{
			name: 'heart',
			img: 'img/heart.png'
		},

		{
			name: 'oval',
			img: 'img/oval.png'
		},

		{
			name: 'rect',
			img: 'img/rect.png'
		},

		{
			name: 'square',
			img: 'img/square.png'
		},

		{
			name: 'star',
			img: 'img/star.png'
		},
				{
			name: 'circle',
			img: 'img/circle.png'
		},

		{
			name: 'heart',
			img: 'img/heart.png'
		},

		{
			name: 'oval',
			img: 'img/oval.png'
		},

		{
			name: 'rect',
			img: 'img/rect.png'
		},

		{
			name: 'square',
			img: 'img/square.png'
		},

		{
			name: 'star',
			img: 'img/star.png'
		}
	
	]

	cardArray.sort(() => 0.5 - Math.random())

	const grid = document.querySelector('.grid')
	const resultDisplay = document.querySelector('#result')
	var cardsChosen = []
	var cardsChosenId = []
	var cardsWon = []

	function createBoard(){
		resultDisplay.textContent = cardsWon.length;
		for(let i = 0; i < cardArray.length; i++){
			var card = document.createElement('img')
			card.setAttribute('src', 'img/card.png')
			card.setAttribute('data-id', i)
			card.addEventListener('click', flipCard)
			grid.appendChild(card)
		}
	}

	function checkForMatch(){
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]

		if(cardsChosen[0] === cardsChosen[1]){
			/*
			alert('You found a match')
			cards[optionOneId].setAttribute('src', 'img/cleared.png')
			cards[optionTwoId].setAttribute('src', 'img/cleared.png')
			*/
			cardsWon.push(cardsChosen)
		}else{
			cards[optionOneId].setAttribute('src', 'img/card.png')
			cards[optionTwoId].setAttribute('src', 'img/card.png')
		}
		cardsChosen = []
		cardsChosenId = []
		resultDisplay.textContent = cardsWon.length
		if (cardsWon.length === cardArray.length/2) {
			resultDisplay.textContent = 'Congratulations!'
		}
	}

	function flipCard(){
		var cardId = this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute('src', cardArray[cardId].img)
		if (cardsChosen.length === 2){
			setTimeout(checkForMatch, 250)
		}

	}


	createBoard()

})