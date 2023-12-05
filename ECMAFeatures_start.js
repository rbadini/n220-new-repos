//let vs var
document.getElementById('s1').innerHTML +="<p>X where y=20:" + x +"</p>";



let x =10
if(x ==10) {
    var y =20;
    document.getElementById('s1').innerHTML +="<p>y where y=20:" + y +"</p>";

}

//default perimeters
function multiply(a,b=2) {
    return a*b;
}

let m1 =multiply(5);
let m2 =multiply(5,8);

document.getElementById('s2').innerHTML = "<p>Default parameter: " + m1 + "<br/>Two parameters: " + m2 + "</p>";

//Multiline
let t1 = "Hello, World!";
let t2 = "Hello, World!";
let t3 = `Hello, World
- love HTML
-love CSS
-love Javascript`;
document.getElementById('s8').innerHTML = t1 +t2+ t3;

//template laterals
let firstName = "Gary";
let lastName = "Smith";

document.getElementById('s3').innerHTML+= "<p>" +firstName + " " + lastName + "</p>";
document.getElementById('s3').innerHTML+= `<p>${firstName} ${lastName}</p>`;

// Arrow functions
function fullName(f,l) {
    return `${f} ${l}`;

    //Arrow function with one line in code block
    fullName2=(f, l)=>`${f} ${l}`; 


    //Arrow function will multiline code block
fullName3=fullName3=(f, l)=> {
    console.log(f,l);
    `${f} ${l}`; 
}


    document.getElementById('s4').innerHTML=`<p>${fullName(firstName, lastName)}</p>`;
    document.getElementById('s4').innerHTML+=`<p>One line Arrow Function:${fullName2(firstName, lastName)}</p>`;
    document.getElementById('s4').innerHTML+=`<p>Multiline Arrow Function:${fullName3(firstName, lastName)}</p>`;
}

//Javascript classes
class Book {
    constructor(title, author, pubDate) {
    this.title = title;
    this.author = author;
    this.pubDate = PubDate;
    }
    
}

const jsBook = new Book("Javascript and you", "Code Master", 2020);

document.getElementById('s5').innerHTML = `Title: ${jsBook.title} <br/>Author: ${jsBook.author}<br/>Date Published: ${jsBook.PubDate}</p>`;


//Array Destructuring
const course=['N220', 'Intro to Javascript'];
let [courseNum, courseTitle]=course;

document.getElementById('s7_array').innerHTML = `<p>${courseNum} ${courseTitle}</p>`;

let [title, surName] = ['Mr', 'john', 'philips', 'Sr'];

document.getElementById('s7_array').innerHTML +=`<p>${title} ${surName}</p>`;


