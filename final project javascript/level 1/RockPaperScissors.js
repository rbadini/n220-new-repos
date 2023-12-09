let gameCount = 0; // Track the number of games played

// Function to play the game
function playGame() {
    const choices = ["rock", "paper", "scissors"];
    const player1Choice = choices[Math.floor(Math.random() * choices.length)];
    const player2Choice = choices[Math.floor(Math.random() * choices.length)];

    // Display images for player choices
    document.getElementById('player1Image').src = `level 1/rock/${player1Choice}.png`;
    document.getElementById('player2Image').src = `level 2/paper${player2Choice}.png`;

    // Determine the winner
    const winner = determineWinner(player1Choice, player2Choice);
    document.getElementById('gameResult').innerText = winner + " Play again.";

    // Update game history table
    gameCount++;
    updateGameHistoryTable(gameCount, winner);
}

// Function to determine the winner
function determineWinner(choice1, choice2) {
    if (choice1 === choice2) {
        return "It's a tie!";
    } else if ((choice1 === "rock" && choice2 === "scissors") || 
               (choice1 === "scissors" && choice2 === "paper") || 
               (choice1 === "paper" && choice2 === "rock")) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}

// Function to update the game history table
function updateGameHistoryTable(gameNumber, winner) {
    const gameHistoryTable = document.getElementById('gameHistory');
    const newRow = gameHistoryTable.insertRow(-1); // Insert a new row at the end of the table
    const cell1 = newRow.insertCell(0); // Insert the first cell (game number)
    const cell2 = newRow.insertCell(1); // Insert the second cell (winner)

    cell1.innerText = gameNumber; // Set text for the game number cell
    cell2.innerText = winner; // Set text for the winner cell
}
