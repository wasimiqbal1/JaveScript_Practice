//Show an alert with an external script

Code
alert('Hello, world!');


/* Code structure
The first thing we’ll study is the building blocks of code.
Statements
Statements are syntax constructs and commands that perform actions.
We’ve already seen a statement, alert('Hello, world!'), which shows the message “Hello, world!”.
We can have as many statements in our code as we want. Statements can be separated with a semicolon.

For example, here we split “Hello World” into two alerts:*/

Code
alert('Hello');
alert('World');

// Variables
// A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.
// To create a variable in JavaScript, use the let or var keyword.

let message;
message = 'Hello'; // store the string
alert(message); // shows the variable content

// We can also declare multiple variables in one line:

let user = 'John',
    age = 25,
    message = 'Hello';

// var instead of let
// In older scripts, you may also find another keyword: var instead of let:

// Constants
// To declare a constant (unchanging) variable, use const instead of let:

const myBirthday = '01.11.1980';
myBirthday = '01.01.2001'; // error, can't reassign the constant!

// When a programmer is sure that a variable will never change, they can declare it with const to guarantee and clearly communicate that fact to everyone.

// We can declare variables to store data by using the var, let, or const keywords.

// let – is a modern variable declaration.
// var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
// const – is like let, but the value of the variable can’t be changed.
// Variables should be named in a way that allows us to easily understand what’s inside them.

// Data types

// The number type represents both integer and floating point numbers.
// There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.


// String
// A string in JavaScript must be surrounded by quotes.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

// In JavaScript, there are 3 types of quotes.
// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.
// Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

let name = "John";
// embed a variable
alert(`Hello, ${name}!`); // Hello, John!
// embed an expression
alert(`the result is ${1 + 2}`); // the result is 3
alert("the result is ${1 + 2}"); // the result is ${1 + 2} (double quotes do nothing)