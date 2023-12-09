function convertToPigLatin() {
    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    
    // Check if the names are entered
    if (!firstName || !lastName) {
        alert("Please enter both first and last names.");
        return;
    }

    // Convert names to Pig Latin
    firstName = convertName(firstName);
    lastName = convertName(lastName);

    // Display the result
    document.getElementById('pigLatinName').innerText = `Your pig latin name is ${firstName} ${lastName}.`;
}

function convertName(name) {
    // Capitalize the first letter and make the rest lowercase
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    
    // Move the first letter to the end and add "ay"
    return name.slice(1) + name.charAt(0) + "ay";
}
