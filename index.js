

document.getElementById('RollButton').addEventListener('click', function() {
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);

    var diceRoll1 = document.querySelector("img.img1");

    if (randomNumber1 == 1) {
    diceRoll1.setAttribute("src", "./images/dice1.png");
}
else if (randomNumber1 == 2) {
    diceRoll1.setAttribute("src", "./images/dice2.png");
}
else if (randomNumber1 == 3) {
    diceRoll1.setAttribute("src", "./images/dice3.png");
}
else if (randomNumber1 == 4) {
    diceRoll1.setAttribute("src", "./images/dice4.png");
}
else if (randomNumber1 == 5) {
    diceRoll1.setAttribute("src", "./images/dice5.png");
}
else if (randomNumber1 == 6) {
    diceRoll1.setAttribute("src", "./images/dice6.png");
}


var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var diceRoll2 = document.querySelector("img.img2");

if (randomNumber2 == 1) {
    diceRoll2.setAttribute("src", "./images/dice1.png");
}
else if (randomNumber2 == 2) {
    diceRoll2.setAttribute("src", "./images/dice2.png");
}
else if (randomNumber2 == 3) {
    diceRoll2.setAttribute("src", "./images/dice3.png");
}
else if (randomNumber2 == 4) {
    diceRoll2.setAttribute("src", "./images/dice4.png");
}
else if (randomNumber2 == 5) {
    diceRoll2.setAttribute("src", "./images/dice5.png");
}
else if (randomNumber2 == 6) {
    diceRoll2.setAttribute("src", "./images/dice6.png");
}


if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Tie, Roll Again! 🚩"
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
}
})

document.querySelector("button").textContent = "Re-Roll"
