
const randomNumber = Math.floor(Math.random()*100+1)

let userInput = document.querySelector("#userInput")
let submit = document.querySelector(".form")
let para = document.querySelector(".para")
let prevGuess = document.querySelector("#guess")
let remaining = document.querySelector("#remaining")
let msg = document.querySelector("#message")


let p = document.createElement("p")

let guesses = []
let numberOfGuess = 1
let playGame = true;

if (playGame){
    submit.addEventListener("submit",(e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)){
        alert("Please Provide Valid Input")
        userInput.value=""
    }
    else if(guess>100 || guess<1){
        alert("Please Provide Input between 1 to 100")
        userInput.value=""
    }
    else {
        guesses.push()
        if(numberOfGuess === 11){
            userInput.value = ''
            displayMessage(`Game Over Random Number is ${randomNumber}`)
            endGame()
        }
        else {
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber){
        updateValue(guess)
        displayMessage("Bravo! you Guessed it Right")
        endGame()

    }
    else if (guess>randomNumber){
        updateValue(guess)
        displayMessage("You Guess Too High")
    }
    else if (guess<randomNumber){
        updateValue(guess)
        displayMessage("You Guess Too Low")
    }
}

function updateValue(guess){
    userInput.value = ""
    prevGuess.innerHTML += ` ${guess},`
    numberOfGuess ++
    remaining.innerHTML = ` ${11-numberOfGuess}`
}

function displayMessage(message){
    msg.innerHTML = `${message}`
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute("disabled","")
    p.classList.add("button")
    p.innerHTML = `<h2 id="reset">Start NewGame</h2>`
    para.appendChild(p)
    playGame = false;
    newGame()
}

function newGame(){
    const startNewGame = document.querySelector("#reset")
    startNewGame.addEventListener("click",()=>{

        const randomNumber = Math.floor(Math.random()*100+1)
        guesses = []
        numberOfGuess = 1
        msg.innerHTML=""
        remaining.innerHTML = ` ${11-numberOfGuess}`
        prevGuess.innerHTML = ""
        userInput.removeAttribute("disabled")
        para.removeChild(p)
    
        playGame = true
    })
}



