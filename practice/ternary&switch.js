/******************
 * The Ternary Operator and Switch Statements
 */

 var firstName = 'John';
 var age = 11;

 // Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer!') : console.log(firstName + ' drinks juice!');

var drink = age >= 18 ? 'rom' : 'cola';
console.log(firstName + ' drinks ' + drink);

/*
if (age >=18) {
    drink = 'whiskey';
} else {
    drink = 'soda'
};

console.log(firstName + ' drinks ' + drink);
*/

// Switch statement

var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':    
        console.log(firstName + ' teaches kids in school.')
        break; // if not break, than it will compare the next and so on
    case 'driver':
        console.log(firstName + ' drives an uber in Lviv.')
        break;
    case 'designer':
        console.log(firstName + ' designes beautiful websites.')
        break;
    default:
        console.log(firstName + ', what do you do?')    
};


age = 11;
switch(true){
    case age < 13:
        console.log(firstName + ' is a boy!');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager!');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man!');
        break;
    default:
    console.log(firstName + ' is a man!');
}