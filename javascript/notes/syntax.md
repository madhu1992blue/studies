# Printing Data

```javascript
    console.log("Hello World");
```

# Variables

## Basic Types

- number: Example: 10, 20.5 (Integers and floats are considered as numbers and don't have separate types). It is implemented as a floating point number. There is no separate integer type in JavaScript. There is BigInt but that is not commonly used. and 10 is still a number.
- string: Example: "Hello", 'World' (Single or double quotes can be used)
- boolean: true, false
- undefined: undefined

## Special Values

- undefined: This is a special value in JavaScript : Avoid setting this value explicitly. It is used by JavaScript to show that a variable is not assigned any value.

- null: Use null when you want to assign a variable to nothing to show explicit absence of value. Like None in Python. Unfortunately, the typeof null is object in JavaScript.

## Example variables and value types

```javascript
var n1 = 10; // This is a number (not integer)
var n2 = 20.5; // This is also a number
var b = true; // This is a boolean
var s = "Hello"; // This is a string
var u = undefined; // This is undefined
var u1; // This is also undefined
var n = null; // This is null. The typeof null is object unfortunately.
```

## Declaring variables

- var: Don't use this at all. This is the most common way to declare variables in JavaScript. Within a function, var makes variable function scoped. If outside a function, it will be globally scoped.
    ```javascript
    function test() {
        if (true) {
            var x = 10;
        }
        console.log(x); // This will print 10 because x is function scoped.
    }
    ```
- let: This is the new way to declare variables in JavaScript. It is block scoped. Use this instead of var.
    ```javascript
    function test() {
        if (true) {
            let x = 10;
        }
        console.log(x); // This will throw an error because x is block scoped.
    }
    ```
- const: This is used to declare constants in JavaScript. It is block scoped. Use this when you don't want to change the value of a variable.
    ```javascript
    const x = 10;
    x = 20; // This will throw an error because x is a constant.
    ```

## Hoisting

- JavaScript moves all variable declarations to the top of the function. This is called hoisting. The variable is hoisted, but the value is not hoisted.
    ```javascript
    console.log(x); // This will print undefined because x is hoisted.
    var x = 10;
    ```
- This is how the above code is interpreted by JavaScript.
    ```javascript
    var x;
    console.log(x);
    x = 10;
    ```
- This is why you can use a variable before declaring it. But it is not recommended to do so. It is better to declare the variable before using it. This is because it can lead to confusion and bugs.

- While hoisting happens for let and const, the variable is not initialized. So, you cannot use the variable before declaring it. This is called the Temporal Dead Zone (TDZ).
    ```javascript
    console.log(x); // This will throw an error because x is in the TDZ.
    let x = 10;
    ```
    - This is why you cannot use a variable before declaring it when using let and const.


## Undeclared Variables vs Undefined variables vs null

- Undeclared variables are variables that are not declared at all. If you try to access an undeclared variable, it will throw a ReferenceError.
    ```javascript
    console.log(x); // This will throw a ReferenceError because x is not declared.
    ```
    Note: However, error will say x is not defined while it's actually not declared. A Quirk in JavaScript.
- Undefined variables are variables that are declared but not assigned any value. If you try to access an undefined variable, it will print undefined.
    ```javascript
    var x; // x is declared but not assigned any value.
    console.log(x); // This will print undefined.
    ```
    Note: One may also assign the special value `undefined` to a variable to show that it is not assigned any value.
    ```javascript
    var x = undefined; // x is declared and assigned undefined.
    console.log(x); // This will print undefined.
    ```
    Note: type of undefined is also undefined in JavaScript.
- null is a special value in JavaScript that is used to show explicit absence of value. If you try to access a null variable, it will print null.
    ```javascript
    var x = null; // x is declared and assigned null.
    console.log(x); // This will print null.
    ```
    Note: The typeof null is object in JavaScript. This is a quirk in JavaScript.

## Variable Guidelines

- Don't use var. Use let and const instead.
- Use let for variables that will change.
- Use const for variables that won't change.
- Always declare variables before using them.
- Use null to show explicit absence of value. Remember that the typeof null is object in JavaScript.
- Avoid using undefined to show absence of value. Use null instead. Remember that the typeof undefined is undefined in JavaScript.
- Use camelCase for variable names. For example, firstName, lastName, etc.

## How to inspect type of a value

typeof is a unary operator that is used to inspect the type of a value. It returns a string that represents the type of the value.

```javascript
console.log(typeof 10); // number
console.log(typeof 20.5); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
```

## Javascript is dynamically typed and weakly typed

- Dynamically typed: This means that the type of a variable is determined at runtime. You don't have to specify the type of a variable when declaring it. The type of a variable can change during the execution of the program.
    ```javascript
    var x = 10; // x is a number
    x = "Hello"; // x is now a string
    ``` 

- Weakly typed: This means that JavaScript will try to convert a value to the type that it needs. For example, if you try to add a number and a string, JavaScript will convert the number to a string and concatenate the two strings.
    ```javascript
    console.log(10 + "Hello"); // 10Hello
    ```
    - In the above example, 10 is converted to a string and concatenated with "Hello".

# Semi-colons

- Semi-colons are optional in JavaScript. However, it is recommended to use semi-colons to avoid bugs and confusion.
- JavaScript uses a feature called Automatic Semicolon Insertion (ASI) to insert semi-colons automatically. However, this feature can lead to bugs and confusion. So, it is better to use semi-colons explicitly.


# Strings

- Can be written using single quotes or double quotes but choose one.
- Strings are immutable. This means that you cannot change a string once it is created. You can only create a new string.

## length property for string length
- Strings have a length property that shows the number of characters in the string.
    Ex: `"Hello".length` will return 5.

## Template Strings

- Template strings are strings that allow you to embed expressions in them.
- Template strings are enclosed in backticks.
- You can embed expressions in template strings using ${expression}.
- You can also embed multi-line strings in template strings.
    ```javascript
    var name = "John";
    var age = 30;
    var str = `Hello, my name is ${name} and I am ${age} years old.`;
    console.log(str); // Hello, my name is John and I am 30 years old.
    ```
- Template strings are a better way to concatenate strings in JavaScript.


## String encoding

- JavaScript uses UTF-16 encoding for strings. This means that each character in a string is represented by 16 bits.
- Some characters like emojis require more than 16 bits to represent. These characters are represented by two 16-bit values. This is called a surrogate pair.
    ```javascript
    let name = "🐻";
    console.log(`constant 'name' UTF-16 unit length: ${name.length}`); // This will print 2
    console.log(`constant 'name' character length: ${[...name].length}`); // This will print 1
    console.log("=====================================");
    console.log(`Hi ${name}, welcome to Textio!`);
    ``` 
    In above example, 
    - name.length will return 2 because the emoji is represented by two 16-bit values. 
    - [...name] expands the emoji into an array of characters. This will return 1 because the emoji is considered as one character. Even multi-byte characters are considered as one character in JavaScript. 
        - When name is "🐻", [...name] will return ["🐻"].
    - So, .length is the number of 16-bit values and [...name].length is the number of characters. 


## String concatenation

- You can concatenate strings using the + operator.
    ```javascript
    var str = "Hello" + "World";
    console.log(str); // HelloWorld
    ```