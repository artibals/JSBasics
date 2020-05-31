/******************
* Arrays
*/

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1989, 1969, 1948);

console.log(names); // displays all the array
console.log(names[2]); // will be 'Jane' 
console.log(names.length); // displays length of the array

// Mutate array data
names[1] = 'Ben'; // overwrites an ellement on position 1
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

// Arrays methods
john.push('blue'); // adds an element to the end of the array
john.unshift('Mr.'); // adds an element to the start of the array
console.log(john);

john.pop(); // removes an element from the end of the array
john.shift(); // removes an element from the start of the array
console.log(john);

console.log(john.indexOf(23)); // returns -1 if there is no such element


var isDesigner = john.indexOf('designer') === -1 ? 
'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);