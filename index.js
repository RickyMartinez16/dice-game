
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let leftDice = document.querySelector(".img1")

let rightDice = document.querySelector(".img2")

leftDice.setAttribute("src", `images/dice${randomNumber1}.png`)

rightDice.setAttribute("src", `images/dice${randomNumber2}.png`)



let winner = document.querySelector("h1")

//ternary to change heading 
winner.innerText = randomNumber1 === randomNumber2 ? "Draw" : randomNumber1 > randomNumber2 ? "Player 1 Wins!" : "Player 2 Wins!"


//if else to change heading

// if(randomNumber1 === randomNumber2){
//     winner.innerText = "Tie!"
// } else if (randomNumber1 > randomNumber2 ){
//     winner.innerText = "Player 1 Wins!"
// } else {
//     winner.innerText = "Player 2 Wins!"
// }
