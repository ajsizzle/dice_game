// Function for onlick event
document.querySelector("button").addEventListener("click", function() {

  // Create 2 variables for random numbers from 1 to 6
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Select the classes for the images
  var img1 = document.querySelector(".img1");
  var img2 = document.querySelector(".img2");

  // Compare both img vars to each other and set the atrributes
  // to access the file and generate the random number to change file
  var player1 = img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  var player2 = img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  // Select h1 and change winner of the game
  var winner = document.querySelector("h1");

  // Compare the randomNumber vars and change to
  // Player 1 wins! // Player 2 wins! // Draw!
  if (randomNumber1 > randomNumber2) {
    winner.innerHTML = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    winner.innerHTML = "Player 2 Wins!";
  } else {
    winner.innerHTML = "Draw!";
  }

});
