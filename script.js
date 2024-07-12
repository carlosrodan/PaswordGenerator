const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
"W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
"v","w","x","y","z"];
const lettersNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lettersSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[",
"}","]",",","|",":",";","<",">",".","?","/"];
const lettersNumbersSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
"#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let characters;

let passwd1El = document.getElementById("passwd1-el")
let passwd2El = document.getElementById("passwd2-el")
let passwdLengthEl = document.getElementById("myDropdown")
let numbersOn = document.querySelector(".switch.number input")
let symbolsOn = document.querySelector(".switch.symbol input")

function genRandInteger(lowerLim,upperLim){
    let len = upperLim-(lowerLim-1)
    return Math.floor(Math.random()*len)+lowerLim
}

function genNewCharacter(){
    let newCharacterPos = genRandInteger(0,characters.length-1)
    return characters[newCharacterPos]
}

function genPasswd(){
    passwd1El.textContent = "";
    passwd2El.textContent = "";

    let passwdLength = passwdLengthEl.value

    if (numbersOn.checked && symbolsOn.checked){
        characters = lettersNumbersSymbols
    }else if(numbersOn.checked){
        characters = lettersNumbers
    }else if(symbolsOn.checked){
        characters = lettersSymbols
    }else{
        characters = letters
    }

    for (let i = 1; i <= passwdLength; i++){

        let newCharacter1 = genNewCharacter()
        let newCharacter2 = genNewCharacter()

        passwd1El.textContent += newCharacter1
        passwd2El.textContent += newCharacter2
    }
}

function copypwd(passwd1or2){
    if (passwd1or2 === 1){
        navigator.clipboard.writeText(passwd1El.textContent)
        passwd1El.textContent = "Password copied! 🔑" 
    }
    else{
        navigator.clipboard.writeText(passwd2El.textContent)
        passwd2El.textContent = "Password copied! 🔑"
    }
}

//window.onload = genPasswd()
