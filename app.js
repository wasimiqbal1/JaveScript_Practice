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

// Boolean (logical type)
// The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// Boolean values also come as a result of comparisons:

let isGreater = 4 > 1;
alert(isGreater); // true (the comparison result is "yes")

// The “null” value
// The special null value does not belong to any of the types described above.
// It forms a separate type of its own which contains only the null value:
let age = null;

// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.
// The code above states that age is unknown.

// The “undefined” value
// The special value undefined also stands apart. It makes a type of its own, just like null.
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined:

let age;
alert(age); // shows "undefined"

// Technically, it is possible to explicitly assign undefined to a variable:

let age = 100;

// change the value to undefined
age = undefined;
alert(age); // "undefined"

// The typeof operator

// The typeof operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.
// It supports two forms of syntax:
// As an operator: typeof x.
// As a function: typeof(x).
// In other words, it works with parentheses or without them. The result is the same.
// The call to typeof x returns a string with the type name:

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10 n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)


// 
Summary
// There are 8 basic data types in JavaScript.

// number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
// bigint is for integer numbers of arbitrary length.
// string for strings. A string may have zero or more characters, there’s no separate single-character type.
// boolean for true/false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// object for more complex data structures.
// symbol for unique identifiers.


// alert
// This one we’ve seen already. It shows a message and waits for the user to press “OK”.

alert("Hello");

// prompt
// The function prompt accepts two arguments:
// The call to prompt returns the text from the input field or null if the input was canceled.

let age = prompt('How old are you?', 25);

alert(`You are ${age} years old!`); // You are 25 years old!

// confirm
// The function confirm shows a modal window with a question and two buttons: OK and Cancel.
// The result is true if OK is pressed and false otherwise.

let isBoss = confirm("Are you the boss?");

alert(isBoss); // true if OK is pressed

// Type Conversions
// Most of the time, operators and functions automatically convert the values given to them to the right type.

// String Conversion

// String conversion happens when we need the string form of a value.
// For example, alert(value) does it to show the value.
// We can also call the String(value) function to convert a value to a string:

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

// Numeric Conversion
// Numeric conversion happens in mathematical functions and expressions automatically.

alert("6" / "2"); // 3, strings are converted to numbers

// We can use the Number(value) function to explicitly convert a value to a number:

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

// Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.

let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed


// Boolean Conversion
// Boolean conversion is the simplest one.
// It happens in logical operations (later we’ll meet condition tests and other similar things) but can also be performed explicitly with a call to Boolean(value).
// The conversion rule:
// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.

alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean("hello")); // true
alert(Boolean("")); // false

// Basic operators, maths
// Terms: “unary”, “binary”, “operand”
// An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

let x = 1;

x = -x;
alert(x); // -1, unary negation was applied


// An operator is binary if it has two operands. The same minus exists in binary form as well:
let x = 1,
    y = 3;
alert(y - x); // 2, binary minus subtracts values

// Maths
// The following math operations are supported:
// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.

// Remainder %
// The remainder operator %, despite its appearance, is not related to percents.

alert(5 % 2); // 1, a remainder of 5 divided by 2
alert(8 % 3); // 2, a remainder of 8 divided by 3

Exponentiation **
    The exponentiation operator a ** b raises a to the power of b.
alert(2 ** 2); // 2² = 4
alert(2 ** 3); // 2³ = 8
alert(2 ** 4); // 2⁴ = 16

// String concatenation with binary +
// Let’s meet features of JavaScript operators that are beyond school arithmetics.
let s = "my" + "string";
alert(s); // mystring
alert('1' + 2); // "12"
alert(2 + '1'); // "21"


// Numeric conversion, unary +
// The plus + exists in two forms: the binary form that we used above and the unary form.

// The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
// No effect on numbers
let x = 1;
alert(+x); // 1

let y = -2;
alert(+y); // -2

// Converts non-numbers
alert(+true); // 1
alert(+""); // 0

// The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?


let apples = "2";
let oranges = "3";

alert(apples + oranges); // "23", the binary plus concatenates strings


// Operator precedence
// If an expression has more than one operator, the execution order is defined by their 
// precedence, or, in other words, the default priority order of operators.

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert(n); // 14

// Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.

let n = 2;

n *= 3 + 5;

alert(n); // 16  (right part evaluated first, same as n *= 8)

// Increment/decrement
// Increasing or decreasing a number by one is among the most common numerical operations.

// Increment ++ increases a variable by 1:
let counter
let a = 1,
    b = 1;

let c = ++a; // ?
let d = b++; // ?
= 2;
counter++; // works the same as counter = counter + 1, but is shorter
alert(counter); // 3

// Decrement -- decreases a variable by 1:

let counter = 2;
counter--; // works the same as counter = counter - 1, but is shorter
alert(counter); // 1

// Comparisons
// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
// Not equals. In maths the notation is ≠, but in JavaScript it’s written as a != b.
// Boolean is the result
// All comparison operators return a boolean value:

// true – means “yes”, “correct” or “the truth”.
// false – means “no”, “wrong” or “not the truth”.
alert(2 > 1); // true (correct)
alert(2 == 1); // false (wrong)
alert(2 != 1); // true (correct)

let result = 5 > 4; // assign the result of the comparison
alert(result); // true


// String comparison
// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

// alert( 'Z' > 'A' ); // true
// alert( 'Glow' > 'Glee' ); // true
// alert( 'Bee' > 'Be' ); // true

// Comparison of different types
// When comparing values of different types, JavaScript converts the values to numbers.

alert('2' > 1); // true, string '2' becomes a number 2
alert('01' == 1); // true, string '01' becomes a number 1

// Strict equality
// A regular equality check == has a problem. It cannot differentiate 0 from false:

alert(0 == false); // true
alert('' == false); // true

// This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.
// What to do if we’d like to differentiate 0 from false?
// A strict equality operator === checks the equality without type conversion.


// Summary
// Comparison operators return a boolean value.
// Strings are compared letter-by-letter in the “dictionary” order.
// When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
// The values null and undefined equal == each other and do not equal any other value.

// Conditional branching: if,

// The “if” statement
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) {
    alert("That's correct!");
    alert("You're so smart!");
}

// Boolean conversion
// The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
// Other values become true, so they are called “truthy”.

// The “else” clause
// The if statement may contain an optional “else” block. It executes when the condition is falsy.

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
    alert('You guessed it right!');
} else {
    alert('How can you be so wrong?'); // any value except 2015
}

// Several conditions: “else if”
// Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
    alert('Too early...');
} else if (year > 2015) {
    alert('Too late');
} else {
    alert('Exactly!');
}

// Conditional operator ‘?’
// Sometimes, we need to assign a variable depending on a condition.

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

alert(accessAllowed);

// Logical operators
// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). Here we cover the first three

// || (OR)
// The “OR” operator is represented with two vertical line symbols:

// There are four possible logical combinations:
// alert(true || true); // true
// alert(false || true); // true
// alert(true || false); // true
// alert(false || false); // false

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    alert('The office is closed.'); // it is the weekend
}


// && (AND)
// The AND operator is represented with two ampersands &&:

// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    alert('The time is 12:30');
}
// Just as with OR, any value is allowed as an operand of AND:

if (1 && 0) { // evaluated as true && false
    alert("won't work, because the result is falsy");
}

// !(NOT)
// The boolean NOT operator is represented with an exclamation sign!.

alert(!true); // false
alert(!0); // true

// A double NOT !! is sometimes used for converting a value to boolean type:

alert(!!"non-empty string"); // true
alert(!!null); // false

alert(Boolean("non-empty string")); // true
alert(Boolean(null)); // false