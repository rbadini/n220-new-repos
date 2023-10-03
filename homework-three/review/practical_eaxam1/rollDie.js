let currentWinnings = 100;
let winningText = "";

document.querySelector('button').addEventListener('click', rollDie);

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    
    switch(roll) {
        case 1:
            winningText = "It is good to be number 1! You doubled your winnings!";
            currentWinnings *= 2;
            break;

        case 2:
            winningText = "Second best is not good enough. Roll again.";
            rollDie();
            return; 

        case 3:
            winningText = "Three is not a lucky number at all. You lose all your winnings!";
            currentWinnings = 0;
            break;

        case 4:
            winningText = "Four is lucky like a four-leafed clover. You won 400 points!";
            currentWinnings += 400;
            break;

        case 5:
            winningText = "Five Alive. You are still in the game, but there is no change in your winnings.";
            break;
            
        case 6:
            let userNumber = prompt("You rolled a 6! Choose a number between 1 and 100:");
            let targetNumber = 75; 
            
            //  the user input is a number
            userNumber = Number(userNumber);
            
            if (userNumber === targetNumber) {
                winningText = "You are lucky indeed! You just multiplied your winnings by your chosen number!";
                currentWinnings *= userNumber;
            } else if (userNumber < 50) {
                winningText = "You picked a rather low number, but you win those points.";
                currentWinnings += userNumber;
            } else {
                winningText = "No special event for this choice!";
            }
            break;
        default:
            winningText = "An unexpected event occurred.";
            break;
    }
    
    document.getElementById("wText").innerText = winningText + " Your current winnings are: $" + currentWinnings;
}
