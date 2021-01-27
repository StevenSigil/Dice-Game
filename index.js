// LEFT SIDE - random number between 1 & 6
var randomNumber1 = Math.ceil(Math.random() * 6);

// Changing the image based on random for the left side
var randomDiceImg1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImg1);

// RIGHT SIDE - random number between 1 & 6
var randomNumber2 = Math.ceil(Math.random() * 6);

// Changing the image based on random for the right side
var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImg2);

// Changing the text depending who won
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "It's a Tie!";
}
