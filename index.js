// Inside index.js, create a new variable called randomNumber1 then set 
//the value of this variable to a random number between 1 and 6. 
//Test it out in the console to make sure it works as expected.

let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let leftDice = document.querySelector(".img1")

leftDice.setAttribute("src", `images/dice${randomNumber1}.png`)
