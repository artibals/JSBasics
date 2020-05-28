/********************************
Basic operators
*/
var now, yearJohn, yearMark, ageJohn, ageMark; 

now = 2020;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn; // 1992
yearMark = now - ageMark; // 1987

console.log(yearJohn, yearMark); 

console.log(now + 2); // 2022
console.log(now * 2); // 4040
console.log(now / 2); // 1010

// Logical operators
var johnOlder = ageJohn > ageMark; // false
var markOlder = ageJohn < ageMark; // true

console.log(johnOlder, markOlder);

// typeof operator
console.log(typeof johnOlder); // boolean
console.log(typeof ageMark); // number
console.log(typeof 'Mark is older than John'); // string

var x;

console.log(typeof x); // undefined