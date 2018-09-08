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

function createWordStore() {
    document.getElementById('buttonsDiv').addEventListener('click', function() {
        let wordStore = document.getElementById('textInput').value;
    } );    
}

function createTranslateStore() {
    let wordArray = Object.getOwnPropertyNames('french')
    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i] = wordStore) {
            let translateStore = wordArray[i];
            break;
        }
        else {
            let translateStore = "I'm sorry, I only know seven words plus this phrase explaining that fact";
        }
    }
    createTranslateString(translateStore);  
}

function createTranslateString(word, language) {
    let translateString = language[word];
}

function printToDom(string) {
    const div = document.getElementById('textOutput');
    div.innerHTML += string;
}

