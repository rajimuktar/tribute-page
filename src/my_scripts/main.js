// alert(`You're welcome to the mosque directory`);

// let myHeading = document.querySelector('h1');

// myHeading.textContent = "Welcome to Mosque Directory";

var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');



function setUserName () {
    var myName = prompt('What is your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }


  myButton.onclick = function() {
    setUserName();
  }

myImage = document.querySelector('img'); // stores img as 

myImage.onclick = function() {
    let myScr = myImage.getAttribute('src');
    if (myScr ==='./images/img1.jpg') {
        myImage.setAttribute('src', './images/img2.jpg');
    }
    else {
        myImage.setAttribute('src', './images/img1.jpg');
    }
    }
