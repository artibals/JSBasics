/******************
 * Boolean logic
 */

var firstName = prompt('Please, enter your name.');
var age = prompt('Please, enter your age.');

if (age < 13) {
    console.log(firstName + ' is a boy!');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager!');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man!');
} else {
    console.log(firstName + ' is a man!');
}