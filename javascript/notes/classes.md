# Classes

## Class Definition

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

- Note: Only 1 constructor is allowed in a class.


## Creating an object from a class

```javascript
const person = new Person('John');
person.sayHello(); // This will print 'Hello, my name is John'
```

## Class Inheritance

```javascript
class Employee extends Person {
    
    constructor(name, title){
        super(name); // Call the constructor of the parent class
        this.title = title;
    }

    sayTitle(){
        console.log(`My title is ${this.title}`);
    }
}

const employee = new Employee('Jane', 'Developer');
employee.sayHello(); // This will print 'Hello, my name is Jane'
employee.sayTitle(); // This will print 'My title is Developer'
```


For derived classes, if a constructor is not defined, then the default constructor is automatically created which looks like this:
```javascript
constructor(...args) {
  super(...args);
}
```

For non-derived classes, the default constructor is:

```javascript
constructor() {}
```


Calling methods of the parent class from the derived class:

```javascript
class Employee extends Person {
    
    constructor(name, title){
        super(name); // Call the constructor of the parent class
        this.title = title;
    }

    sayHello(){
        super.sayHello(); // Call the sayHello method of the parent class
        console.log(`My title is ${this.title}`);
    }
}

const employee = new Employee('Jane', 'Developer');
employee.sayHello(); // This will print 'Hello, my name is Jane' and 'My title is Developer'
```


## Static Methods

```javascript
class Math {
    
    static add(a, b){
        return a + b;
    }

    static subtract(a, b){
        return Math.add(a , -b); // We can call other static methods using the class name
    }
}

console.log(Math.add(1, 2)); // This will print 3
console.log(Math.subtract(1, 2)); // This will print -1
```

## Getters and Setters

```javascript
class Person {
    
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }
}

const person = new Person('John');
console.log(person.name); // This will print 'John'
person.name = 'Jane';
console.log(person.name); // This will print 'Jane'
```

## Private Fields

```javascript
class Person {
    
    #name;
    static #count = 0; // Private static field
    constructor(name){
        this.#name = name;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }

    #privateMethod(){
        console.log('This is a private method');
    }
}

const person = new Person('John');
console.log(person.name); // This will print 'John'
person.name = 'Jane';
console.log(person.name); // This will print 'Jane'
```

## Class Expressions

```javascript
const Person = class {
    
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

## Class Hoisting

While classes are hoisted, they are not initialized and are in Temporal Dead Zone like let and const. So, you cannot access a class before it is declared.

```javascript
const person = new Person('John'); // This will throw a ReferenceError 

class Person {
    
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name}`);
    }
}
```




