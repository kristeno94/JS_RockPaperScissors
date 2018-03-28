// function to collect user input
const getUsersChoice = (userInput) =>{
  // control user input is in same string format
  userInput = userInput.toLowerCase();
  // display a message if user's input is invalid
  if (userInput != 'rock' && userInput != 'paper'
     && userInput != 'scissors' && userInput != 'bomb')
    {
      console.log('ERROR: User must input bomb, rock, paper or scissors');
    }
  // return user input to next function
  else
    {
      return userInput
    }
}; // end getUserChoice function

// testing getUsersChoice:
	// test function works with correct parameter values:
console.log('getUsersChoice Test, expected output: paper, rock, scissors, bomb.');
console.log(getUsersChoice('PapeR'));
console.log(getUsersChoice('ROCK'));
console.log(getUsersChoice('scissors'));
console.log(getUsersChoice('bOMB'));
console.log('------------------------------');
// test function displays error message with invaid parameter values:
console.log('getUsersChoice Test, expected output: two error messages.');
console.log(getUsersChoice('panda bear'));
console.log(getUsersChoice('miranda from sex and the city'));
console.log('------------------------------');
// end userChoice testing

// function to collect computer input
const getComputerChoice = () =>{
  // inintializa random number randChoice with minimum (0) and maximum(2) 		   // bounds as constant variables randMin, randMax
  const randMax = 2;
  const randMin = 0;
  let randChoice = Math.floor(Math.random() * (randMax - randMin + 1) + randMin);
  // assign a choice to the rand
  if (randChoice == 0)
    {
      return 'rock';
    }
  else if (randChoice == 1)
    {
      return 'paper';
    }
  else
    {
      return 'scissors';
    }
}; // end getComputerChoice function

// testing getComputerChoice
console.log('getComputerChoice Test, expected output: valid game choices.')
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log('------------------------------');
// end getComputerChoice testing

// function to determine winner of the rpm match
const determineWinner = (userInput, computerInput) =>{
  // determine whether match was a tie
  if (userInput == computerInput)
    {
      return 'Match was a tie.';
		}
  // else determine the winner
  	// first case: user chose rock
  else if (userInput == 'rock')
  {
    if (computerInput == 'scissors')
      {
        return 'You win this match!';
      }
    else // computerInput must be paper
      {
        return 'The computer is the winner of this match.';
      }
  }
  	// second case: user chose paper
  else if (userInput == 'paper')
  {
    if (computerInput == 'scissors')
      {
        return 'The computer is the winner of this match.';
      }
    else // computerInput must be rock
      {
        return 'You win this match!';
      }
  }
  	// third case: user chose scissors
  else if
    {
      if (computerInput == 'paper')
        {
          return 'You win this match!';
        }
      else // computerInput must be rock
        {
          return 'The computer is the winner of this match.';
        }
    }
    else
    {
      return 'Bomb applied: You win this match!';
    }
}; // end determineWinner function

// testing Bomb
console.log('determineWinner Test, expected output: user wins 3 times with bomb.');
	// test correct output for bomb cheat
console.log(determineWinner('bomb', 'paper'));
console.log(determineWinner('bomb', 'rock'));
console.log(determineWinner('bomb', 'scissors'));
console.log('------------------------------');
// end bomb testing

// testing determineWinner:
console.log('determineWinner Test, expected output: tie, tie, tie.');
	// test correct output for a tie
console.log(determineWinner('paper', 'paper'));
console.log(determineWinner('rock', 'rock'));
console.log(determineWinner('scissors', 'scissors'));
console.log('------------------------------');
	// test correct output for computer is the winner
console.log('determineWinner Test, expected output: computer wins 3 times.');
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('rock', 'paper'));
console.log(determineWinner('scissors', 'rock'));
console.log('------------------------------');
	// test correct output for user is the winner
console.log('determineWinner Test, expected output: user wins 3 times.');
console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('scissors', 'paper'));
console.log(determineWinner('paper', 'rock'));
console.log('------------------------------');
// end determineWinner testing

// function to play a match, calls on three past functions
const playGame = (userInput) =>{
  // validates userInput as a valid rpm choice
  let userChoice = getUsersChoice(userInput);
  // gets random computerChoice
  let computerChoice = getComputerChoice();
  // returns a string determining the winner or tie
  return determineWinner(userChoice, computerChoice);
}; // end playGame function

// testing playGame function:
console.log('playGame Test, expected output: error message.');
console.log(playGame('carmela from Sopranos'));
console.log('------------------------------');
console.log('playGame Test, expected output: user wins with bomb.');
console.log(playGame('bomb'));
console.log('playGame Test, expected output: winner or ties.');
console.log(playGame('rock'));
console.log(playGame('paper'));
console.log(playGame('scissors'));
//end playGame testing
