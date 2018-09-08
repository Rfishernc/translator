const french = {
    'hello': 'bonjour',
    'goodbye': 'au revoir',
    'library': 'bibliotheque',
    'beer': 'biere',
    'cat': 'chat',
    'dog': 'chien',
    'person': 'la personne'
}

const spanish = {
    'hello': 'hola',
    'goodbye': 'adios',
    'library': 'biblioteca',
    'beer': 'cerveza',
    'cat': 'gato',
    'dog': 'perro',
    'person': 'persona' 
}

const german = {
    'hello': 'hallo',
    'goodbye': 'auf wiedersehen',
    'library': 'bibliothek',
    'beer': 'bier',
    'cat': 'katze',
    'dog': 'hund',
    'person': 'person' 
}

const myLanguage = {
    'french': french,
    'spanish': spanish,
    'german': german,
}

let translateStore = '';
let translateString = '';
let wordStore = '';
let language = '';
let wordArray = '';

function createWordStore() {
    document.getElementById('buttonsDiv').addEventListener('click', function() {
        wordStore = document.getElementById('textInput').value;
        language = event.target.id;
        createTranslateStore(language);
    } );    
}

function createTranslateStore(lang) {
    wordArray = Object.getOwnPropertyNames('french')
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] = wordStore) {
            translateStore = wordArray[i];
            createTranslateString(translateStore, lang);
            break;
        }
        else {
            printToDom("Im sorry, I only know seven words plus this phrase explaining that fact");
        }
    }
      
}

function createTranslateString(word, lng) {
    translateString = myLanguage[lng][word];
    console.log(translateString);
    printToDom(translateString);
}

function printToDom(string) {
    const div = document.getElementById('textOutput');
    div.innerHTML = string;
}

createWordStore();