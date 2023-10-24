// Start of the adventure
alert("Welcome to the Jungle Adventure!");

// Get the user's first choice
var firstChoice = prompt("You're lost in a jungle. Do you want to go LEFT or RIGHT?").toLowerCase().trim();

console.log("First Choice:", firstChoice); // Debug

// Handle the user's first choice
switch (firstChoice) {
    case "left":
        console.log("Entered LEFT path"); // Debug
        
        // The user chose to go left
        var secondChoice = prompt("You encounter a river. Do you want to CROSS it or GO AROUND it?").toLowerCase().trim();

        console.log("Second Choice after LEFT:", secondChoice); // Debug

        switch (secondChoice) {
            case "cross":
                // The user chose to cross the river
                alert("You successfully crossed the river and found a village!");
                break;
            case "go around":
                // The user chose to go around the river
                alert("You chose to go around and got lost again. Better luck next time!");
                break;
            default:
                // The user entered an invalid choice
                alert("Invalid choice. The adventure ends abruptly.");
                break;
        }
        break;
    case "right":
        console.log("Entered RIGHT path"); // Debug
        
        // The user chose to go right
        var tool = prompt("You found a cave with three tools. Choose one: KNIFE, TORCH, or ROPE.").toLowerCase().trim();

        console.log("Tool Choice:", tool); // Debug

        switch (tool) {
            case "knife":
                // The user chose the knife
                alert("You used the knife to cut fruits and survived!");
                break;
            case "torch":
                // The user chose the torch
                alert("You lit the torch and found a hidden treasure inside the cave!");
                break;
            case "rope":
                // The user chose the rope
                alert("Using the rope, you climbed a steep hill and spotted a path out of the jungle!");
                break;
            default:
                // The user entered an invalid choice
                alert("That's not a valid choice. You stayed in the cave and the adventure ends.");
                break;
        }
        break;
    default:
        // The user entered an invalid choice
        alert("Invalid choice. The adventure ends abruptly.");
        break;
}
