const cardsArray = [
    {    'name': 'CSS',    'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true',  },
    {    'name': 'HTML',    'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true',  },
    {    'name': 'jQuery',    'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true',  },
    {    'name': 'JS',    'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true',  },
    {    'name': 'Node',    'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true',  },
    {    'name': 'Photo Shop',    'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true',  },
    {    'name': 'PHP',    'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true',  },
    {    'name': 'Python',    'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true',  },
    {    'name': 'Ruby',    'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true',  },
    {    'name': 'Sass',    'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true',  },
    {    'name': 'Sublime',    'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true',  },
    {    'name': 'Wordpress',    'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true',  },
];

let counter = 0;
let firstGuess = '';
let secondGuess = '';

const gameGrid = cardsArray.concat(cardsArray)
gameGrid.sort(() => 0.5 - Math.random());

const game = document.getElementById('game-board');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.dataset.name = item.name;
    card.style.backgroundImage = `url(${item.img})`;

    grid.appendChild(card);
})

const match = () => {
    const allSelected = document.querySelectorAll('.selected');
    allSelected.forEach(element => {
        element.classList.add('match');
    })
}

grid.addEventListener('click', event => {
    const clickedElement = event.target;
    
    if(clickedElement.nodeName === 'SECTION') {
        return;
    }
    
    if(counter < 2) {
        counter++;
        
        if(counter === 1) {
            firstGuess = clickedElement.dataset.name;
            clickedElement.classList.add('selected');
        } else {
            secondGuess = clickedElement.dataset.name;
            clickedElement.classList.add('selected');
        }
    }
    
    if(firstGuess !== '' && secondGuess !== '') {
        if(firstGuess === secondGuess) {
            match();
        }
    }
    

})