# this

## "this" in Object methods

As an object method is a function, it has access to the object's properties using the `this` keyword. The `this` keyword refers to the object itself. 

```javascript
const person = {
    name: 'John',
    age: 30,
    sayHello(){ //style 1 - ES6 syntax
        console.log(`Hello, my name is ${this.name}`); //this refers to the object like self in python
    },

    sayHi: function(){ // style 2
        console.log(`Hi, my name is ${this.name}`); // this refers to the object like self in python
    },

    sayHelloArrow: () => { 
        console.log(`Hello, my name is ${this.name}`); // This will print 'Hello, my name is undefined' in CommonJS . Don't use arrow functions for object methods. In ES module, it will crash as this is undefined.
    }
}
```

Note: Don't use arrow functions for object methods because arrow functions do not have their own `this` value. They inherit the `this` value from the enclosing scope.

## "this" in browser

In the browser, the `this` keyword refers to the `window` object in the global scope.

```javascript
console.log(this); // This will print the window object
```

## "this" in Node.js

In Node.js for commonjs, the `this` keyword refers to the module.exports object in the current module.

```javascript
// CommonJS module
console.log(this === module.exports); // true
```

## "this" in ES modules (both in Node.js and Browsers)
For ES modules, the `this` keyword is undefined in the module scope.

```javascript
// ES module
console.log(this); // undefined
```

## "this" in strict mode 

In strict mode, the `this` keyword is undefined in the global scope.

```javascript
'use strict'; // This line enables strict mode
console.log(this); // undefined
```

## "this" in arrow functions

Arrow functions do not have their own `this` value. They inherit the `this` value from the enclosing scope.

```javascript
const person = {
    name: 'John',
    sayHello: function(){ 
        console.log(`Hello, my name is ${this.name}`);
    },
    sayHelloArrow: () => { // It captures this from the enclosing scope. In current case, it will be the undefined for ES module and module.exports object for commonjs module and window object for browser.
        console.log(`Hello, my name is ${this.name}`);
    }
}

person.sayHello(); // This will print 'Hello, my name is John'
person.sayHelloArrow(); // This will print 'Hello, my name is undefined'
```

## "this" in a "function"

`function` functions have their own `this` value that is determined by how they are called. 

```javascript

const person = {
    name: 'John',
    sayHello: function(){ 
        console.log(`Hello, my name is ${this.name}`);
    }
}
person.sayHello();

const person2 = {
    name: "Jane",
}
person2.sayHello = person.sayHello;
person2.sayHello(); // This will print 'Hello, my name is Jane' . The function is called on person2 object, so 'this' will refer to person2 object.
```

## "this" in a "class"

In a class, the `this` keyword refers to the object created from the class.
A class body has a "this" context, unlike an object literal. So, arrow functions capture the "this" from the class body which refers to the object created from the class.

```javascript
class Person {
    
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person = new Person('John');
person.sayHello(); // This will print 'Hello, my name is John'
```

## "this" in a class body inside an arrow function

In a class body, an arrow function captures the "this" from the class body which refers to the object created from the class.

```javascript
class Person {
    
    constructor(name){
        this.name = name;
    }

    sayHello = () => { // this style is preferred if you want to use the function as a callback function without losing the "this" context. Note that this is a instance method.
        console.log(`Hello, my name is ${this.name}`);
    }
}


const person = new Person('John');
person.sayHello(); // This will print 'Hello, my name is John'
```

One may ask, why is this needed? The reason is that the arrow function captures the "this" from the class body, so it can be used as a callback function without losing the "this" context.

```javascript
function invoke(callback){
    callback();
}

class Person {
    
    constructor(name){
        this.name = name;
    }

    sayHelloArrow = () => {
        console.log(`Hello, my name is ${this.name}`);
    }

    sayHelloNormal(){
        console.log(`Hello, my name is ${this.name}`);
    }

    sayHelloAfterTimeout(){
        invoke(this.sayHelloNormal, 1000); // This will print 'Hello, my name is undefined'. 
        invoke(this.sayHelloArrow, 1000); // This will print 'Hello, my name is John'
    }
}

const person = new Person('John');
person.sayHelloAfterTimeout();

```
In Javascript, for function, this depends on how the function is called and on which object they are called. So, the function is called when `callback()` is called and the `this` refers to the global object. But, for arrow function, `this` is captured from the class body, so it refers to the object created from the class.

Remember: Arrow functions are good when you want to capture the "this" from the enclosing scope and also when you want to use the function as a callback function without losing the "this" context.


## "arrow function" don't work as constructor


## Detect classic function vs arrow function

A classic function has a `prototype` property, whereas an arrow function does not have a `prototype` property.

```javascript
function isArrowFunction(func){
    return func.hasOwnProperty('prototype') === false;
}

const arrowFunc = () => {};
const classicFunc = function(){};

console.log(isArrowFunction(arrowFunc)); // true
console.log(isArrowFunction(classicFunc)); // false
```


## What if I have a regular instance method but I want to use it as a callback function without losing the "this" context?

You can bind the function to the object.

```javascript
function invoke(callback){
    callback();
}

class Person {
    
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person = new Person('John');
invoke(person.sayHello.bind(person)); // This will print 'Hello, my name is John'
```


