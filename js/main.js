/* *********** //
    Variables
// *********** */

const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const overlay = document.getElementById('overlay');
const startButton = overlay.getElementsByClassName('btn__reset')[0];
const phraseUL = phrase.firstElementChild;
const heartsList = document.querySelectorAll('.tries');
const winBanner = document.getElementsByClassName('win')[0];
const loseBanner = document.getElementsByClassName('lose')[0];
const resetButtons = document.getElementsByClassName('restart-game');


/* *********** //
    Phrases
// *********** */

const phraseList = [
    'When pigs fly',
    'Hip hip hooray',
    'A dime a dozen',
    'A piece of cake',
    'When in Rome',
    'Life is Short',
    'Happily ever after',
    'You only live once',
    'The best of both worlds',
    'It takes two to tango',
    'Once in a blue moon',
    'You are what you eat',
    'Keep your fingers crossed',
    'Curiosity killed the cat',
    'Raining cats and dogs',
    'Down to the wire',
];


/* *********** //
   ~~ Magic ~~
// *********** */

//hide overlay when start button is clicked

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});


// Get Random Phrase as Array Function

function getRandomPhraseAsArray(arr) {   
    //random number between 0 and array length - 1
    let randomNum = Math.floor(Math.random() * arr.length);
    //grab random phrase from array
    let chosenPhrase = arr[randomNum];
    //split phrase into new array of characters
    let newCharacterArray = chosenPhrase.split('');
    //return array of new characters
    return newCharacterArray;
}

// Store result of getRandomPhraseAsArray

let gamePhrase = getRandomPhraseAsArray(phraseList);

// Add Phrase to Display Function

function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let phraseLI = document.createElement('LI');
        phraseLI.innerText = arr[i];

        if (phraseLI.innerText !== " ") {
            phraseLI.className = 'letter';
        } else if (phraseLI.innerText === ' ') {
            phraseLI.className = 'space';
        }

        phraseUL.appendChild(phraseLI);
    }
}

addPhraseToDisplay(gamePhrase);

// Check Letter Function

function checkLetter(letterClicked) {
    const letters = document.querySelectorAll('.letter');
    let match;
    for (let i = 0; i < letters.length; i++) {
        if (letterClicked === letters[i].innerText.toLowerCase()) {
            letters[i].className += ' show';
            match = letterClicked;
        }
    };
    if (match) {
    return match;
    } else {
    return null
    }
}

// Keyboard Event Listener

keyboard.addEventListener('click', (e) => {
    if (e.target.type === 'submit') {
        e.target.className = 'chosen';
        e.target.setAttribute('disabled', true);
        let letterFound = checkLetter(e.target.innerText);
        if (letterFound === null) {
            missed += 1;
        }
    }
    checkWin();

    // Remove hearts based on number of misses

    switch (missed) {
        case 1:
            heartsList[0].innerHTML = '<img src="images/lostHeart.png" height="35px" width="30px"></img>';
            break;
        case 2:
            heartsList[1].innerHTML = '<img src="images/lostHeart.png" height="35px" width="30px"></img>';
            break;
        case 3:
            heartsList[2].innerHTML = '<img src="images/lostHeart.png" height="35px" width="30px"></img>';
            break;
        case 4:
            heartsList[3].innerHTML = '<img src="images/lostHeart.png" height="35px" width="30px"></img>';
            break;
        case 5:
            heartsList[4].innerHTML = '<img src="images/lostHeart.png" height="35px" width="30px"></img>';
            break;
    }
});

// checkWin Function

function checkWin() {
    if (document.querySelectorAll('.letter').length === document.querySelectorAll('.show').length) {
        winBanner.style.display = 'flex';
    } if (missed === 5) {
        loseBanner.style.display = 'flex';
    }
}

// gameReset Function

function gameReset() {

    //keyboard reset
    const chosenKeys = document.querySelectorAll('.chosen');
    for (let i = 0; i < chosenKeys.length; i++) {
        chosenKeys[i].removeAttribute('disabled');
        chosenKeys[i].removeAttribute('class');
    };
    //hearts reset
    for (let i = 0; i < heartsList.length; i++) {
        heartsList[i].innerHTML = '<img src="images/liveHeart.png" height="35px" width="30px"></img>';
    };
    //phrase reset
    phraseUL.innerHTML = "<ul></ul>";
    //missed reset
    missed = 0;
    //hide win or lose overlay
    loseBanner.style.display = 'none';
    winBanner.style.display = 'none';
    //add new game phrase to display
    gamePhrase = getRandomPhraseAsArray(phraseList);
    addPhraseToDisplay(gamePhrase);
}

// Reset Button Listeners

resetButtons[0].addEventListener('click', () => {gameReset()});
resetButtons[1].addEventListener('click', () => {gameReset()});