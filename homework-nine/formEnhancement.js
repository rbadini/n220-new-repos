// Select the first form on the page
var passForm = document.forms[0];

// Select the first image (eye icon) within the form
var passBtn = passForm.getElementsByTagName('img')[0];

// Add an event listener to the eye icon
passBtn.addEventListener('click', function() {
    // Get the src attribute of the eye icon
    var imgSrc = passBtn.getAttribute('src');

    // Check if the 'hide' string is part of the img src
    var hidePassImg = imgSrc.indexOf('hide') >= 0;

    if (hidePassImg) {
        // If 'hide' is found, change the icon to 'show' and change the input type to text
        passBtn.setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/showPassIcon.png");
        document.getElementById('pass').setAttribute('type', 'text');
    } else {
        // Otherwise, change the icon to 'hide' and change the input type back to password
        passBtn.setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/hidePassIcon.png");
        document.getElementById('pass').setAttribute('type', 'password');
    }
});
