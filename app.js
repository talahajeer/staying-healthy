var message = '';
var userName = prompt('What is you name?');

var age = prompt('How old are you?');

alert('Hello ' + userName);

if (age < 18) {
    message = ', Stay eating healthy and have complemetary vitamins.';
} else {
    message = ', Do not stop doing sports and stay fit.';
}

document.write('<h1>' + userName + message + '</h1>');
document.write('<h2>' + 'Stay Safe' + '</h2>');

var knowMore = confirm("Do you want to know more?");
var readMore = "";

if (knowMore == true) {
    document.write(`<a href="https://www.ucsfhealth.org/education/tips-for-staying-healthy">' + readMore + </a>`);
} else {
}