// Main JS Project

// 4.b start
const arGameOptions = ["Rock", "Paper", "Scissors"];

const sComputerPlay = function() {    
    let iComputerChoice = Math.floor(Math.random() * arGameOptions.length);
    return arGameOptions[iComputerChoice];
}
// 4.b end

// 4.c & 4.d start
const sPlayRound = function(playerSelection, computerSelection) {
    // Making player & computer selection case-insensitive
    let sPlayerSelection = playerSelection.toLowerCase();
    let sComputerSelection = computerSelection.toLowerCase();
    
    // Round Logic
    if (sPlayerSelection == sComputerSelection) return "It's a draw!"
    if (sPlayerSelection == "rock" && sComputerSelection == "paper") return "Computer wins the round! Paper beats Rock!";
    if (sPlayerSelection == "paper" && sComputerSelection == "rock") return "Player wins the round! Paper beats Rock!";
    if (sPlayerSelection == "scissors" && sComputerSelection == "rock") return "Computer wins the round! Rock beats Scissors!";
    if (sPlayerSelection == "rock" && sComputerSelection == "scissors") return "Player wins the round! Rock beats Scissors!";
    if (sPlayerSelection == "paper" && sComputerSelection == "scissors") return "Computer wins the round! Scissors beat paper!";
    if (sPlayerSelection == "scissors" && sComputerSelection == "paper") return "Player wins the round! Scissors beat paper!";
}
// 4.c & 4.d end

// 4.e start
const sGame = function() {
    // Score variables declaration and initialization
    let iPlayerScore = 0,
    iComputerScore = 0;

    // Game Logic
    for (let round = 0; round < 5; round++) {
        // 1st round message
        if (round == 0) console.log("Welcome to RPS! \nGet ready to Rock..., or Paper..., or Scissors!");
        // last round message
        if (round == 4) console.log("This is the last round!");

        let sPlayerSelection = prompt("Make your choice: ", "Rock, Paper or Scissors...?");
        // Valid input check for player selection
        while (sPlayerSelection.toLowerCase() != "rock" && sPlayerSelection.toLowerCase() != "paper" 
        && sPlayerSelection.toLowerCase() != "scissors") {
            sPlayerSelection = prompt("⛔ Invalid input! Please try again!", "Rock, Paper or Scissors...?");
        }

        const sComputerSelection = sComputerPlay();
        let sRoundResult = sPlayRound(sPlayerSelection, sComputerSelection);
        // scores update
        if (sRoundResult.startsWith("C")) iComputerScore++;
        if (sRoundResult.startsWith("P")) iPlayerScore++;

        console.log(`${sRoundResult} \nPlayer Score: ${iPlayerScore}\tComputer Score: ${iComputerScore}`);
    }
    if (iComputerScore > iPlayerScore) console.log("🔴 Computer wins! 😢");
    if (iComputerScore < iPlayerScore) console.log("👏 You win! 🐱‍🚀");
    if (iComputerScore == iPlayerScore) console.log("💥 No way! It's a draw! 🤣");
}
// Play a game!
sGame();
//4.e end

// Additional functionality: Wanna play another game? start
let sPlayAnotherGame = prompt("Wanna play another one? 😎", "Type Yes or No..."); 

while (sPlayAnotherGame.toLowerCase() == "yes") {
    sGame();
    sPlayAnotherGame = prompt("Wanna play another one? 😎", "Type Yes or No...");
}
// Additional functionality end

