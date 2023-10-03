let acct = 45.67;
let toy = 45.99;
let buyToy=acct>toy;

if(buyToy) {
    document.getElementById('bank').innerHTML = "Let's go buy it!";
} else {
    document.getElementById('bank').innerHTML = "No toy today.";

}

const today = new Date();
let myMonth = today.getMonth()+1;

if(myMonth===9) {
    document.getElementById('birthday').innerHTML = "Happy birthday month to you!";
}else{
    document.getElementById('birthday').innerHTML = "No birthday party for you this month";
}
