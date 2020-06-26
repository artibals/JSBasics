//////////////////////////
// Scoping

// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!'
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c); // 'Hello!Hi!Hey!'
    }
}

// Example to show the difference between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!'
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    console.log(c); // will be an error, cause third() is in global scope and has no access to var c
    console.log(a + d); // 'Hello!John', cause third has access to var a and var d
}