/*************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height; // undefined - falsy

//height = ''; // falsy
//height = 0; // falsy
height = 23; // truthy

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined')
}

// Equality operators

if(height == '23') {
    console.log('The == operator does type coercion');
}

// 23 === '23' will be false
// 23 == '23' will be true cause of type coercion