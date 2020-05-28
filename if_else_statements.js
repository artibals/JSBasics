/*****************
If / else statements
*/

var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)'); 
}


var isMarried = true;

if(isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)'); 
}


var markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI, markBmiHigherJohnBmi;

markMass = 65; // kg
markHeight = 1.85; // meters
johnMass = 84;
johnHeight = 1.82;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

if(markBMI > johnBMI){
    console.log('Mark\'s BMI is higher than John\'s: ' + markBMI);
} else {
    console.log('John\'s BMI higher than Mark\'s: ' + johnBMI);
}
