# Functions

## Terminology

- **Function Declaration**: A function declaration is a function that is declared using the `function` keyword.
- **Object Method**: A function that is a property of an object.
- **Instance Method**: A function that is a property of a class.
- **Anonymous Function**: A function that does not have a name.
- **Arrow Function**: A function that is declared using the `=>` syntax.
- **Callback Function**: A function that is passed as an argument to another function.


```javascript
function getSum(num1, num2){
    return num1 + num2;
}
```

## Function Hoisting

Unlike in python, functions in JavaScript are hoisted. This means that you can call a function before it is declared.

```javascript
console.log(getSum(1, 2)); // This will print 3
function getSum(num1, num2){
    return num1 + num2;
}
```
This is because JavaScript moves all function declarations to the top of the file. This is called hoisting.

## Function Return

A function can return only one value. If you want to return multiple values, you can return an object.

```javascript
function getSumAndDifference(num1, num2){
    return {
        sum: num1 + num2,
        difference: num1 - num2
    };
}
```

If you try to return multiple values, only the last value will be returned.

```javascript
function getSumAndDifference(num1, num2){
    return num1 + num2, num1 - num2; // This will return num1 - num2
}
```


## Anonymous Functions

You can also create functions without a name. These are called anonymous functions.

```javascript
const getSum = function(num1, num2){
    return num1 + num2;
}
```

## Arrow Functions

Arrow functions are a more concise way of writing functions. They are also called lambda functions.

```javascript
const getSum = (num1, num2) => num1 + num2;
```

If you have only one parameter, you can omit the parentheses.

```javascript
const getSquare = num => num * num;
```

If you have no parameters, you need to include an empty pair of parentheses.

```javascript
const sayHello = () => console.log('Hello');
```

## Default Parameters

You can set default values for parameters.

```javascript
function getSum(num1 = 0, num2 = 0){
    return num1 + num2;
}
```

## Rest Parameters

You can pass an arbitrary number of arguments to a function using rest parameters.

```javascript
function getSum(...nums){
    return nums.reduce((acc, num) => acc + num, 0);
}
```

## Spread Operator

You can pass an array to a function using the spread operator.

```javascript
const nums = [1, 2, 3];
console.log(getSum(...nums)); // This will print 6
```

## Callback Functions

You can pass a function as an argument to another function.

```javascript
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function calculate(num1, num2, operation){
    return operation(num1, num2);
}

console.log(calculate(1, 2, add)); // This will print 3
console.log(calculate(1, 2, subtract)); // This will print -1
```

## function vs arrow function

Arrow functions do not have their own `this` value. They inherit the `this` value from the enclosing scope.
`function` functions have their own `this` value that is determined by how they are called. 

```javascript
const person = {
    name: 'John',
    sayHello: function(){ // This will print 'Hello, my name is John'
        console.log(`Hello, my name is ${this.name}`);
    }
}

person.sayHello();
```

Object methods don't work well with arrow functions because arrow functions do not have their own `this` value. They inherit the `this` value from the enclosing scope.  Objects don't have their own "this" context. 

Arrow functions don't consider the object on which they are called as the "this". They capture the "this" from the enclosing scope. 

```javascript
const person = {
    name: 'John',
    sayHello: () => { // This will print 'Hello, my name is undefined' in CommonJS module and crashes in ES module
        console.log(`Hello, my name is ${this.name}`);
    }
}
```

- This inside instance methods of a class refers to the object created from the class.

```javascript
class Person {
    
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name}`);
    }
}
```
However, this is not suitable if sayHello is passed as a callback function because the "this" will be lost.

```javascript
function invoke(callback){
    callback();
}
const person = new Person('John');
invoke(person.sayHello); // For commonJS, This will print 'Hello, my name is undefined' as when function is called inside invoke, it is not called on person object. For ES module, it will crash.
```

To fix this, you can bind the function to the object.

```javascript
function invoke(callback){
    callback();
}
const person = new Person('John');
invoke(person.sayHello.bind(person)); // This will print 'Hello, my name is John'
```

Another option is to use arrow functions.

```javascript
function invoke(callback){
    callback();
}
const person = new Person('John');
invoke(() => person.sayHello()); // This will print 'Hello, my name is John'
```

We can even convert the method to an arrow function.

```javascript
class Person {
    
    constructor(name){
        this.name = name;
    }

    sayHello = () => {
        console.log(`Hello, my name is ${this.name}`);
    }
}

function invoke(callback){
    callback();
}
const person = new Person('John');
invoke(person.sayHello); // This will print 'Hello, my name is John'
```

## IIFE (Immediately Invoked Function Expression)

```javascript
(function(){
    console.log('Hello');
})();
```

This is useful when you want to create a function that is executed immediately.
This is also useful for creating a private scope.
It's useful for running some async code too(More on this later).


## Risk of Arrow Functions

For instance methods, for each object created from the class, a new instance method(function object) is created. This can lead to performance issues if you have a lot of objects created from the class.

```javascript
class Person {
    
    constructor(name){
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }

    sayHelloArrow = () => {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person1 = new Person('John');
const person2 = new Person('Jane');

console.log(person1.sayHello === person2.sayHello); // This will print true. They are same object. Every object created from the class will have the same instance method.
console.log(person1.sayHelloArrow !== person2.sayHelloArrow); // This will print true. The 2 functions are different. Every object created from the class will have a new instance method. So, this can lead to performance issues.
```

## Guidelines

- You can create functions using the `function` keyword.
- Don't use arrow functions for object methods.
- Instance Methods that are passed as callback functions can be arrow functions but this is just too clever and can be confusing. It also has performance issues as it creates a new method for every object. It's better to bind the function to the object or create an arrow function that calls the instance method. Some frameworks like React use arrow functions for instance methods though.
- Use arrow functions for functions that are passed as callback functions.
- If a function is not an arrow function but is needed to be passed as a callback function, bind the function to the object.
- Use IIFE for creating a function that is executed immediately.
