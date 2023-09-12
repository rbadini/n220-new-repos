let grades = [78,86,92,77];
var ansText = document.getElementById('answer');

ansText.innerHTML ="Array: " + grades;
ansText.innerHTML+="<br>Second value: " +grades[1];
grades[1]=83;
ansText.innerHTML += "<br>Array: " + grades;
ansText.innerHTML += "<br>Array Length: " + grades.length;
let lastGrade = grades.length-1; //3 
let changeLastGrade = grades[lastGrade]++; //78
ansText.innerHTML += "<br>New Grade: " + changeLastGrade;
//grades[grades.length-1]++;
ansText.innerHTML +="<br>Array: " + grades;
let gradesTotal = grades[0]+grades[1]+grades[2]+grades[3];
ansText.innerHTML +="<br>Average Grade: " + gradeTotal/grades.length;

ansText.innerHTML +="<br>Above 80: " + ((gradeTotal/grades.length)>80);

let tops = ["tshirt","blouse", "tank", "button-up", "sweater", "sweatshirt"];

let bottoms = ['slacks', 'jeans', 'shorts', 'skirts'];
let outfits=[tops, bottoms];

document.write(outfits[0][4], outfits[1][1]);
//add a value at the end
tops.push("hoodie");

var eaText =document.getElementById('extraAnswers');
eaText.innerHTML = "array after push: " + tops;

//remove last value
tops.pop();

eaText.innerHTML += "<br>Array after pop: " + tops;

//remove first value
tops.shift();

eaText.innerHTML += "<br>Array after shift: " + tops;

//add the value at the beginning
tops.unshift("T-shirt");
eaText.innerHTML += "<br>Array after unshift: " + tops;

//add/remove any value in an array
//target blouse
tops.splice(1,1);
eaText.innerHTML += "<br>Array after removing blouse: " + tops;

//add blouse and hoodie after button-up
tops.splice(3,0,"blouse","hoodie");

eaText.innerHTML += "<br>Array after adding avalue: " + tops;



// oblects

const friend = {
    fName: "William",
    lName: "Shakespeare",
    age: 23,
    hometown: "Stradford",
    fullName: function() {
        return this.fName + "" + this.lName;
    }

}
friend.hometown="Parsonville";
document.getElementById('fullName').innerHTML = friend.
fullName() + " was born in " + friend.hometown;
//friend['hometown'];