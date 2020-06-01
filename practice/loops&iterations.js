/*****************
* Loops and iterations
*/

// for loop
for(var i = 0; i <= 10; i++) {
    console.log(i);
};

// i = 0, 0 < 10, log i to console, i++
// i = 1, 1 < 10, log i to console, i++
//...
// i = 9, 9 < 10, log i to console, i++
// i = 10, 10 <= 10, log i to console, i++
// i = 11, 11 <= 10 FALSE, exit the loop!

for(var i = 0; i <= 20; i += 2) {
    console.log(i);
};

var john = ['John', 'Smith', 1990, 'designer', true, 'blue'];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]); // will be John, Smith, 1990, designer, false, blue
};

// while loop

var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
};

// continue and break statements
var josh = ['Josh', 'Smith', 1974, 'driver', true, 'red'];

for (var i = 0; i < josh.length; i++) {
    if(typeof josh[i] !== 'string') continue;
    console.log(josh[i]);
};

for (var i = 0; i < josh.length; i++) {
    if(typeof josh[i] === 'number') break;
    console.log(josh[i]);
};

// looping backwards
for (var i = josh.length - 1; i >=0; i--) {
    console.log(josh[i]);
}