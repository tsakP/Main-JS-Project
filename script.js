// Main JS Project

const gameOptions = ["rock", "paper", "scissors"];
let playerSelection, computerSelection;

// 4.c & 4.d start
const sPlayRound = function(playerSelection, computerSelection) {
    // Making player selection case-insensitive
    playerSelection = playerSelection.toLowerCase();
    
    // Round Logic
    if (playerSelection == computerSelection) return "It's a draw!"
    if (
        playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "scissors" && computerSelection == "rock" ||
        playerSelection == "paper" && computerSelection == "scissors"
    ) return "Computer wins the round!";
    if (
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "paper"
    ) return "Player wins the round!";
}
// 4.c & 4.d end

// 4.e start
const sGame = function() {
    // Score variables declaration and initialization
    let iPlayerScore = 0,
    iComputerScore = 0;

    // Game Logic
    for (let round = 0; round < 5; round++) {
        // 1st and last round messages
        if (round == 0) console.log("Welcome to RPS! \nGet ready to Rock..., or Paper..., or Scissors!");
        if (round == 4) console.log("This is the last round!");

        playerSelection = prompt("Make your choice: ", "Rock, Paper or Scissors...?").toLowerCase();
        // Valid input check for player selection
        while (!gameOptions.includes(playerSelection)) {
            playerSelection = prompt("⛔ Invalid input! Please try again!", "Rock, Paper or Scissors...?").toLowerCase();
        }

        computerSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)];
        let sRoundResult = sPlayRound(playerSelection, computerSelection);
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

