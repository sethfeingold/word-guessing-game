/* *********** //
    Variables
// *********** */

const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const overlay = document.getElementById('overlay');
const startButton = overlay.getElementsByClassName('btn__reset')[0];


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

function getRandomPhraseAsArray(arr) {   
    //random number between 0 and 5
    let randomNum = Math.floor(Math.random() * arr.length);
    //grab random phrase from array
    let chosenPhrase = arr[randomNum];
    let newCharacterArray = chosenPhrase.split('');
    return newCharacterArray;
};

console.log(getRandomPhraseAsArray(phraseList));