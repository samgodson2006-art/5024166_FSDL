const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function askGuess() {
  rl.question("Guess a number between 1 and 100: ", (guess) => {
    attempts++;
    guess = Number(guess);

    if (guess === secretNumber) {
      console.log(`🎉 Correct! You guessed it in ${attempts} tries.`);
      rl.close();
    } else if (guess > secretNumber) {
      console.log("Too high!");
      askGuess();4
    } else {
      console.log("Too low!");
      askGuess();
    }
  });
}

askGuess();
