/* *********** //
    Variables
// *********** */

const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const overlay = document.getElementById('overlay');
const startButton = overlay.getElementsByClassName('btn__reset')[0];
const phraseUL = phrase.firstElementChild;


/* *********** //
    Phrases
// *********** */

const phraseList = [
    'when pigs fly',
    'hip hip hooray',
    'a dime a dozen',
    'a piece of cake',
    'when in rome'
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
};

// Store result of getRandomPhraseAsArray
let gamePhrase = getRandomPhraseAsArray(phraseList);

// Add Phrase to Display Function

function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let phraseLI = document.createElement('li');
        phraseLI.innerText = arr[i];

        if (phraseLI.innerText !== " ") {
            phraseLI.className = 'letter';
        }

        phraseUL.appendChild(phraseLI);
    }
};

addPhraseToDisplay(gamePhrase);

// Check Letter Function

function checkLetter(letterClicked) {
    let phraseLetters = document.getElementsByClassName('letter');
    
    for (let i = 0; i < phraseLetters.length; i++) {
        if (letterClicked === phraseLetters[i]) {
            phraseLetters[i].classList.add('show');
            let correctLetter = phraseLetters[i];
            return correctLetter;
        } else {
            return null;
        }
    };
};

