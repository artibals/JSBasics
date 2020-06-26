 ////////////////////////////
 // The this keyword

 console.log(this); // window object

 calculateAge(1985);

 function calculateAge(year){
     console.log(2016 - year); // 31
     console.log(this); // window object
 }

 var john = {
     name: 'John',
     yearOfBirth: 1988,
     calculateAge: function() {
         console.log(this); // will be john object
         console.log(2020 - this.yearOfBirth); // 32

         function innerFunction() {
             console.log(this); // will be the window object
             innerFunction();
         }
     }
 }


 // Method borowing

 john.calculateAge();

 var mike = {
    name: 'Mike',
    yearOfBirth: 1998
 };

 mike.calculateAge = john.calculateAge;
 mike.calculateAge(); // mike object, 22, because The `this` keyword is assigned a value when only a function where it is defined is actually called.
