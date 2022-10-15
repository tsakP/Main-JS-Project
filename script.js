// Main JS Project

// 4.b start
const sComputerPlay = function() {
    const arGameOptions = ["Rock", "Paper", "Scissors"];
    let iComputerChoice = Math.floor(Math.random() * arGameOptions.length);
    return arGameOptions[iComputerChoice];
}
// 4.b end

// 4.c & 4.d start
const sPlayRound = function(playerSelection, computerSelection) {
    // Making player & computer selection case-insensitive
    let pSelection = playerSelection.toLowerCase();
    let cSelection = computerSelection.toLowerCase();

    // Round Logic
    if (pSelection == cSelection) return "It's a draw!"
    if (pSelection == "rock" && cSelection == "paper") return "Computer wins the round! Paper beats Rock!";
    if (pSelection == "paper" && cSelection == "rock") return "Player wins the round! Paper beats Rock!";
    if (pSelection == "scissors" && cSelection == "rock") return "Computer wins the round! Rock beats Scissors!";
    if (pSelection == "rock" && cSelection == "scissors") return "Player wins the round! Rock beats Scissors!";
    if (pSelection == "paper" && cSelection == "scissors") return "Computer wins the round! Scissors beat paper!";
    if (pSelection == "scissors" && cSelection == "paper") return "Player wins the round! Scissors beat paper!";
}
// 4.c & 4.d end

// 4.e start
const sGame = function() {
    // Score variables declaration and initialization
    let iPlayerScore = 0,
    iComputerScore = 0;

    // Game Logic
    for (let i = 0; i < 5; i++) {
        // 1st round message
        if (i == 0) console.log("Welcome to RPS! \nGet ready to Rock..., or Paper..., or Scissors!");
        // last round message
        if (i == 4) console.log("This is the last round!");

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

