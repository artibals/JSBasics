# JSBasics

**JavaScript** is lightweight, cross-platform, object-oriented computer programming language;

**JavaScript** is one of the three core technologies of web development;

Today **JavaScript** can be used in different places:

- **Client-side:** **JavaScript** was traditionaly only used in browser
- **Server-side:** Thanks to **Node.js**, we can use **JavaScript** on server as well

**JavaScript** is what made modern web development possible:

- Dynamic effects and interactivity
- Modern web applications that we can interact with

**Framework/Libraries** like **React** and **Angular** are 100% based on **JavaScript**: you need to master **JavaScript** in order to use them!

--------------------------------------------------

**HTML** -> Content
**CSS** -> Presentation
**JS** -> Dynamic Effects/Programming

--------------------------------------------------

**Variable**
(var, let, const) - is a container in which we can store a value in order to use it over and over again in our code.

```javascript
var firstName = 'John';
var age = 23;
var isFullAge = true;
var job;
var cars = null;
```

**Primitive JavaScript Data Types**(JavaScript has dynamic typing: data types are automatically assigned to variables)

1. **Number:** Floating point numbers, for decimals and intergers
2. **String:** Sequence of characters, used for text
3. **Boolean:** Logical data type that can only be true or false
4. **Undefined:** Data type of variable that does not have a value yet
5. **Null:** Also means 'non-existent'

--------------------------------------------------

**Comments**:

```javascript
//Comment

/*
Multiline comment
*/
```

--------------------------------------------------

**Type coercion** - JavaScript automaticaly converts one type of variable to another.

```javascript
console.log('Hello ' + 23);
//will become string "Hello 23"
```

**Variable mutation:** When you mutate a variable you are modifying the original value. An example of this would be to re-assign the `age` variable:

```javascript
var age = 23;
age = 'twenty three'; //now age is a String
```

--------------------------------------------------

**JavaScript Operators:**

- **Math Operators:**

    "-", "+", "*", "/", "="

- **Comparison Operators:**

  - ">"  -  greater than;
  - "<"  -  less than;
  - ">="  -  greater than or equall to;
  - "<="  -  less than or equall to;
  - "=="  -  equality;
  - "==="  -  strict equality;
  - "!="  -  inequality;
  - "!=="  -  strict inequality;
  
- **Logical Operators:**

  - "&&"  -  AND operator(true if ALL are true);
  - "||"  -  OR operator(true if ONE is true);
  - "!"  -  NOT operator(inverts true/false value);

- **Ternary operator** - JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

    ```javascript
    variablename = (condition) ? value1 : value2
    // where "?" is "if", ":" is "else"
    ```

- **Typeof Operator:**

    "typeof _something_"

--------------------------------------------------

**Operator precedence** determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

**Example**:

| Precedence | Operator type     | Associativity | Individual operators |
|------------|-------------------|---------------|----------------------|
|     18     | Postfix Increment |      n/a      |         … ++         |
|     15     |   Multiplication  | left-to-right |         … * …        |
|      3     |     Assignment    | right-to-left |         … = …        |

--------------------------------------------------

**Javascript Statements**:

- **Conditional Statements:**
  - Use `if` to specify a block of code to be executed, if a specified condition is true;

  ```javascript
  if (condition) {
  //  block of code to be executed if the condition is true
  }
  ```
  
  - Use `else` to specify a block of code to be executed, if the same condition is false;

  ```javascript
  if (condition) {
  //  block of code to be executed if the condition is true
  } else {
  //  block of code to be executed if the condition is false
  }
  ```

  - Use `else if` to specify a new condition to test, if the first condition is false;

  ```javascript
  if (condition1) {
  //  block of code to be executed if condition1 is true
  } else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
  } else {
  //  block of code to be executed if the condition1 is false and condition2 is false
  }
  ```

  - Use `switch` to specify many alternative blocks of code to be executed;

  ```javascript
  switch(expression) {
    case x:
       // code block
       break;
    case y:
       // code block
       break;
    default:
       // code block
  }
  ```

**Truthy and Falsy Values**:

- A **falsy** value is something which evaluates to FALSE, for instance when checking a variable. There are only six falsey values in JavaScript: `undefined`, `null`, `NaN`, `0`, `""` (empty string), and `false` of course.

```javascript
var string = ""; // <-- falsy

var filledString = "some string in here"; // <-- truthy

var zero = 0; // <-- falsy

var numberGreaterThanZero // <-- truthy

var emptyArray = []; // <-- truthy, we'll explore more about this next

var emptyObject = {}; // <-- truthy
```

- A **truthy** value is something which evaluates to TRUE. **Truthy** values are those that are NOT **falsy** values :)
