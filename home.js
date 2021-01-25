//challenge 1: your age in days;
function ageindays(){
var birthYear = prompt('what year were you born.....good friend');
var age = (2021-birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode("you are"+age+'days old');
h1.setAttribute("id","ageindays");
h1.appendChild(textAnswer);
document.getElementById("flex-box-result").appendChild(h1);
console.log(age);
}

// this function is used to reset the age 
function reset(){
	document.getElementById('ageindays').remove();
}