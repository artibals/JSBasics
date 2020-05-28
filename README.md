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

**Basic Operators:**

- **Math Operators:**

    "-", "+", "*", "/"

- **Logical Operators:**

    ">", "<", ">=", "<="

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
