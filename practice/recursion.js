/********************
* Recursion
*/

/*
Recursion is the concept that a function can be expressed in terms of itself. 
To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. 
Using a for loop, you could do this:
*/

function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
};

/*
However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. 
That means you can rewrite multiply in terms of itself and never need to use a loop.
*/

function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
};

/*
The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. 
For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. 
At this point, all the functions can return and the original multiply returns the answer.

Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), 
otherwise they can never finish executing.
*/

/*
Now, let's look at a more complex function that returns an array of consecutive integers starting with 1 through the number passed to the function.

As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when it no longer needs to call itself. 
It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. 
If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. 
This function will need to accept an argument, n, representing the final number. 
Then it will need to call itself with progressively smaller values of n until it reaches 1. 
You could write the function as follows:
*/

function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

/*
At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. 
This happens because the push happens last, after the recursive call has returned. 
At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].
*/


/*
We have defined a function named rangeOfNumbers with two parameters. 
The function should return an array of integers which begins with a number represented by the startNum parameter 
and ends with a number represented by the endNum parameter. 
The starting number will always be less than or equal to the ending number. 
Your function must use recursion by calling itself and not use loops of any kind. 
It should also work for cases where both startNum and endNum are the same.
*/

function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
      return [startNum];
    } else {
      const countArray = rangeOfNumbers(startNum, endNum - 1);
      countArray.push(endNum);
      return countArray;
    }
};