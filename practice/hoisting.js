//////////////////////////// 
//Hoisting

// Functions

calculateAge(1990); // will work cause of hoisting

function calculateAge(year) {
    console.log(2020 - year);
};


retirement(1965); // does not work, cause it's a function expression

var retirement = function(year) {
    console.log(65 - (2020 - year));
}


// Variables

console.log(age1) // will be an error

console.log(age); // will be undefined, case js knows that it will be there, but later
var age = 23;
console.log(age); // 23

function foo() {
    console.log(age); // will be undefined
    var age = 65;
    console.log(age); // will be 65, cause this age variable has it's own execution context of foo function
}

foo();
console.log(age) // will be 23, cause the age is declared in a Global Execution Context