
let randomNumber1 = Math.floor(Math.random() * 6) + 1;  //random number for dice 1
let randomNumber2 = Math.floor(Math.random() * 6) + 1;  //random number for dice 2

let leftDice = document.querySelector(".img1")  //select the left dice

let rightDice = document.querySelector(".img2") //select the right dice

leftDice.setAttribute("src", `images/dice${randomNumber1}.png`)     //change the left dice image

rightDice.setAttribute("src", `images/dice${randomNumber2}.png`)    //change right dice image



let winner = document.querySelector("h1")       //select the heading text

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
