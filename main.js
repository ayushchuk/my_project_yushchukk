var myHeading = document.querySelector('h1');
myHeading.textContent = 'Добрий день, !';

var myButton = document.querySelector('button');

function setUserName() {
  var myName = prompt("Введіть своє");
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Уважно слухаю ваше запитання, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Добрий день, ' + storedName + "!";
}

myButton.onclick = function() {
  setUserName();
}

console.log("Тут функцій і продуманості як в чорній дірі, але я старалась і пахала як віл")