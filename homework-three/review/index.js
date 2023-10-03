function findRandomChar() {
    var input = document.getElementById('userInput').value;
    var output = document.getElementById('output');
    var len = input.length;

    if(len === 0) {
        output.textContent = "Please enter a string.";
        return;
    }

    // Find a random position within the string.
    var randomPos = Math.floor(Math.random() * len);
    var randomChar = input.charAt(randomPos);
    var middlePos = Math.floor(len / 2);

    // Check the position of the random character and output accordingly.
    if (randomPos === middlePos && len % 2 !== 0) {
        output.textContent = "This letter is right in the middle of your string: " + randomChar;
    } else if (randomPos < middlePos) {
        output.textContent = "This letter is in the first half of your string: " + randomChar;
    } else {
        output.textContent = "This letter is in the second half of your string: " + randomChar;
    }
}