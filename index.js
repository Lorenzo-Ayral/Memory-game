const cardsArray = [
    { 'name': 'CSS','img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true',  },
    { 'name': 'HTML','img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true',  },
    { 'name': 'jQuery','img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true',  },
    { 'name': 'JS','img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true',  },
    { 'name': 'Node','img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true',  },
    { 'name': 'Photo Shop','img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true',  },
    { 'name': 'PHP','img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true',  },
    { 'name': 'Python','img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true',  },
    { 'name': 'Ruby','img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true',  },
    { 'name': 'Sass','img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true',  },
    { 'name': 'Sublime','img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true',  },
    { 'name': 'Wordpress','img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true',  },
];

let counter = 0;
let firstGuess = '';
let secondGuess = '';
let previousTarget = null;
let delay = 1200;

// Dupliquer le jeu de cartes
const gameGrid = cardsArray.concat(cardsArray)
gameGrid.sort(() => {
    return 0.5 - Math.random();
})

const game = document.getElementById('game-board')
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')
game.appendChild(grid);

gameGrid.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.dataset.name = item.name
    
    const front = document.createElement('div');
    front.classList.add('front');
    
    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${item.img})`
    
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
})

const match = () => {
    const allSelected = document.querySelectorAll('.selected');
    allSelected.forEach(element => {
        element.classList.add('match')
    })
}

const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    counter = 0;

    const allSelected = document.querySelectorAll('.selected')
    allSelected.forEach(element => {
        element.classList.remove('selected');
    })
}

grid.addEventListener('click', event => {
    const clickedElement = event.target;

    if (clickedElement.nodeName === 'SECTION' || clickedElement.parentNode.classList.contains('selected') || clickedElement.parentNode.classList.contains('match')) {
        return;
    }

    if(counter < 2) {
        counter++;
        if(counter === 1) {
            firstGuess = clickedElement.parentNode.dataset.name;
            clickedElement.parentNode.classList.add('selected');
        } else {
            secondGuess = clickedElement.parentNode.dataset.name;
            clickedElement.parentNode.classList.add('selected');
        }

        if(firstGuess !== '' && secondGuess !== '') {
            console.log(firstGuess, secondGuess)
            if (firstGuess === secondGuess) {
                setTimeout(match, delay);
            }
            setTimeout(resetGuesses, delay);
        }
        // previousTarget = clickedElement;
    }

})