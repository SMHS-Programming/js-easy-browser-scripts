// prompt for username
var name = prompt("Please enter your name");
// print out 'your name is' + name when someone enters their name.
console.log("your name is " + name);
console.log("hello " + name + "!");

// pick a random number from 1 to 10 and assign it to variable favoriteNumber
// the variable is of type 'integer'
var favoriteNumber = Math.floor(Math.random() * 10) + 1;
console.log("I've randomly chosen a 'favorite number' between 1 and 10");
console.log("Try to guess it and ill tell you if your guess is higher or lower!");

// an infinate loop
while(true) {
  // prompt for a guess
  var guess = prompt("Please enter your guess!");
  // conver the number they entered (which is currently a string) into an actual integer and store it in a var
  var guessInt = parseInt(guess);
  // print out their guess
  console.log("you guessed " + guessInt);
  if( guessInt > favoriteNumber ) { // guessed too high? if so then tell them.
    console.log("you guessed a bit too high");
  } else if( guessInt < favoriteNumber) { // guessed too low? if so then tell them.
    console.log("you guessed a bit too low");
  } else if( guessInt == favoriteNumber ) {
    // correct guess? break out of the loop.
    break ;
  }
}

// if they got out of the loop they must have guessed right so we will congratulate them
// and tell them they did infact find our favorite number.
console.log("You guessed it! My favorite number was " + favoriteNumber);