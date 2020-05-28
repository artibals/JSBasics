/*******************
Operator precedence
*/

var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true

console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y); // 26, 26

// More operators
x += 2;
console.log(x); // 28
x -= 5;
console.log(x); // 23
x *= 10;
console.log(x); // 230
x /= 10;
console.log(x); // 23
x++;
console.log(x); // 24
x--;
console.log(x); // 23