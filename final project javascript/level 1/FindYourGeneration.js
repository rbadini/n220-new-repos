// Function to calculate and display the generation based on the user's age
function calculateGeneration() {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Retrieve the age entered by the user from the input field
    const age = document.getElementById('age').value;

    // Calculate the birth year by subtracting the age from the current year
    const birthYear = currentYear - age;

    // Variable to store the generation text
    let generation;

    // A switch statement to determine the generation based on the birth year
    switch (true) {
        case (birthYear >= 1946 && birthYear <= 1964):
            generation = "You are a member of the Baby Boomer Generation!";
            break;
        case (birthYear >= 1965 && birthYear <= 1980):
            generation = "You are part of Generation X!";
            break;
        case (birthYear >= 1981 && birthYear <= 1996):
            generation = "You belong in the Y Generation!";
            break;
        case (birthYear >= 1997 && birthYear <= 2012):
            generation = "Generation Z is your generation!";
            break;
        case (birthYear >= 2013 && birthYear <= 2025):
            generation = "You are part of Generation Alpha.";
            break;
        default:
            generation = "Sorry - your generation is not listed.";
    }

    // Display the birth year and generation in the webpage
    document.getElementById('result').innerText = `You were born in ${birthYear}. ${generation}`;
}
