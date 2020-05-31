/*************
* Functions
*/

function calculateAge(birthYear) {
    return 2018 - birthYear;
};

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year); // calls another function in this function
    var retirement = 65 - age;

    retirement > 0 ? 
    console.log(firstName + ' will retire in ' + retirement + ' years.') : 
    console.log(firstName + ' already retired.');
};

yearsUntilRetirement(1989, 'Orest');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

/*****************
* Function Statements and Expression
*/

// Function statement/declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function (job, name) {
    switch(job) {
        case 'teacher':
            return name + ' teaches kids.';
        case 'driver':
            return name + ' drives a cab.';
        case 'designer':
            return name + ' designs websites';
        default:
            return name + ' does something else';           
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'))