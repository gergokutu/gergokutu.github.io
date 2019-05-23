/*
var myHeading = document.querySelector('h1'); // single line comment
myHeading.textContent = 'Hello my beach!';


multi-line
comment
*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/beach.jpeg') {
      myImage.setAttribute ('src','images/beach2.jpeg');
    } else {
      myImage.setAttribute ('src','images/beach.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Find this beach ' + myName + '! ;)';
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Find this beach ' + storedName + '! ;)';
  }

  myButton.onclick = function() {
    setUserName();
  }