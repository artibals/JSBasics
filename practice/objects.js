/****************
* Objects and properties
*/

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john);
console.log(john.firstName);
console.log(john['lastName']);

var x = 'lastName';

console.log(john[x]);

// Objects Mutation
john.job = 'designer';
john['isMarried'] = true;

console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';

console.log(jane);

/************
* Objects and Methods
*/

var josh = {
    firstName: 'Josh',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    /* 1
    calcAge: function(birthYear) {
        return 2018 - birthYear;
    }*/
    /* 2
    calcAge: function() {
        return 2018 - this.birthYear;
    }*/
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

//1 console.log(josh.calcAge(1990));
//2 console.log(josh.calcAge());
//2 josh.age = josh.calcAge();
josh.calcAge();
console.log(josh);