var message = '';
var userName = prompt('What is you name?');

var age = prompt('How old are you?');

alert('Hello ' + userName);

if (age < 18) {
    message = ', Stay eating healthy and have complemetary vitamins.';
} else {
    message = ', Do not stop doing sports and stay fit.';
}

/*
var knowMore = confirm("Do you want to know more?");
var readMore = "";

if (knowMore == true) {
    document.write(`<a href="https://www.ucsfhealth.org/education/tips-for-staying-healthy">' + readMore + </a>`);
} else {
}
*/

var userEnter = prompt('What do you want to read about? sports or food.');

while (userEnter !== 'sports' && userEnter !== 'food') {
    userEnter = prompt('Please Enter sports or food.');
}

if (userEnter === 'sports') {
    document.write('<a href="https://thuraya12.github.io/staying-healthy/index.html" >' + userEnter + '</a>');
} else {
    document.write('<a href="https://raghad-qassim.github.io/staying-healthy/" >' + userEnter + '</a>');
}


var pic = '';
var picture = '<img src="images/2.png"/>';

var numTimes = prompt('How many reminders you want to be notified with?');

for (var i = 0; i < numTimes; i++) {
    pic = pic + picture;
}

document.write(pic);
document.write('<h1>' + userName + message + '</h1>');
document.write('<h2>' + 'Stay Safe' + '</h2>');