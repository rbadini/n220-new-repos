function validateForm() {
    let validForm = true;

    // Validate Zipcode
    let zipVal = document.getElementById('zip').value;
    let validZip = /^\d{5}$/; // 5-digit zip
    if (!validZip.test(zipVal)) {
        document.getElementById('zipError').innerText = "Your zip code must contain only 5 numbers.";
        validForm = false;
    } else {
        document.getElementById('zipError').innerText = "";
    }

    // Validate Phone
    let phoneVal = document.getElementById('phone').value;
    let validatePhone = /^\d{3}-\d{3}-\d{4}$/; // 123-456-7890
    if (!validatePhone.test(phoneVal)) {
        document.getElementById('phoneError').innerText = "You must enter a valid phone number.";
        validForm = false;
    } else {
        document.getElementById('phoneError').innerText = "";
    }

    // Validate Email
    let emailVal = document.getElementById('myEmail').value;
    let validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!validateEmail.test(emailVal)) {
        document.getElementById('emailError').innerText = "You must enter a valid email.";
        validForm = false;
    } else {
        document.getElementById('emailError').innerText = "";
    }

    // Check for value in Name, Address, and City
    let nameVal = document.getElementById('myName').value;
    let addVal = document.getElementById('address').value;
    let cityVal = document.getElementById('city').value;

    if (nameVal == "" || addVal == "" || cityVal == "") {
        console.log("Name, city, or address is empty.");
        validForm = false;
    }

    return validForm;
}

document.getElementsByTagName('form')[0].addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        let items = document.querySelectorAll('ul li');
        items[0].innerText = nameVal + " " + addVal + " " + cityVal + " " + zipVal + " " + phoneVal + " " + emailVal;
        document.getElementsByTagName('div')[0].style.display = "block";
    }
});
