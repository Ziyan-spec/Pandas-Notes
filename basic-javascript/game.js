let gameNum = 30;
alert('You will have to choose a number between 20 and 50..!!');
let userNum = prompt("Guess the number..");

while (gameNum != userNum) {
  userNum = (prompt("You entered the wrong number. Guess the number again..."));
}
console.log("Congratulations 👏, you guessed the right number..");
