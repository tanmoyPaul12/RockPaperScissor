const computerEle = document.getElementById("com-choi")
const userEle = document.getElementById("user-choi")
const resultEle = document.getElementById("result")
const possibleChoice = document.querySelectorAll("button")

let userChoice
let computerChoice
let result

                // write before possible for arrow function bcz let const not hoisted var will show undefined

// let showRes = (e)=>{
//     userChoice = e.target.id
//     userEle.innerHTML = userChoice
    
//     generateComputerChoice()
//     getResult()
// }

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener("click" , showRes))

                // for normal write after bcz function declaration are hoisted

function showRes(e){
    userChoice = e.target.id
    userEle.innerHTML = userChoice
    
    generateComputerChoice()
    getResult()
}


function generateComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3) + 1;//or use possibleChoice.length
    
    if(randomNum === 1){
        computerChoice = "rock"
    }
    if(randomNum === 2){
        computerChoice = "scissor"
    }
    if(randomNum === 3){
        computerChoice = "paper"
    }

    computerEle.innerHTML = computerChoice
}

let getResult = () =>{
    if(computerChoice === userChoice){
        result = "Its a draw!"
    }
    if(computerChoice === "rock" && userChoice === "paper"){
        result = "You won"
    }
    if(computerChoice === "rock" && userChoice ==="scissor"){
        result = "You lost"
    }
    if(computerChoice === "paper" && userChoice === "rock"){
        result = "You lost"
    }
    if(computerChoice === "paper" && userChoice === "scissor"){
        result = "You won"
    }
    if(computerChoice === "scissor" && userChoice === "paper"){
        result = "You lost"
    }
    if(computerChoice === "scissor" && userChoice === "rock"){
        result = "You won"
    }

    resultEle.innerHTML = result
}