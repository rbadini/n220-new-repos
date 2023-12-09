// Define variables for the game's state
let targetNumber = generateRandomNumber(); // The number the user is trying to guess
let chancesLeft = 5; // The number of guesses the user has
let wins = 0; // Total number of wins
let losses = 0; // Total number of losses

// Function to generate a random number between 1 and 100
function generateRandomNumber() {
    // Math.random() generates a random decimal number between 0 and 1
    // Math.floor() rounds a number down to the nearest whole number
    return Math.floor(Math.random() * 100) + 1;
}

// Function called when the user makes a guess
function makeAGuess() {
    let userGuess = parseInt(document.getElementById('userGuess').value); // Get the user's guess from the input field
    let feedbackElement = document.getElementById('feedback'); // Element to display feedback to the user
    let chancesElement = document.getElementById('chancesLeft'); // Element to display remaining chances

    // Check if the user's guess is equal to the target number
    if (userGuess === targetNumber) {
        wins++; // Increment wins
        updateScore(); // Update score display
        feedbackElement.innerText = 'Congratulations! You guessed correctly.';
        askToPlayAgain(); // Offer to restart the game
    } else if (chancesLeft > 1) {
        chancesLeft--; // Decrement chances left
        chancesElement.innerText = chancesLeft;
        feedbackElement.innerText = userGuess < targetNumber ? 'Too low. Try again.' : 'Too high. Try again.';
    } else {
        losses++; // Increment losses
        updateScore(); // Update score display
        feedbackElement.innerText = `Sorry, no more chances. The correct number was ${targetNumber}.`;
        askToPlayAgain(); // Offer to restart the game
    }
}

// Function to update the wins and losses display
function updateScore() {
    document.getElementById('wins').innerText = wins;
    document.getElementById('losses').innerText = losses;
}

// Function to ask the user if they want to play again
function askToPlayAgain() {
    // Confirm dialog to ask user if they want to play again
    if (confirm('Do you want to play again?')) {
        targetNumber = generateRandomNumber(); // Generate a new target number
        chancesLeft = 5; // Reset chances
        document.getElementById('chancesLeft').innerText = chancesLeft;
        document.getElementById('feedback').innerText = '';
    }
}
