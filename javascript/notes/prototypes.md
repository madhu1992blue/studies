# Prototypes

JavaScript objects are dynamic "bags" of properties (referred to as own properties). Javascript objects have a link to a prototype object. When we want to access a property on an object, it will be searched on the object and on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

## Prototype Chain


When we create an object, it has a prototype and that prototype has a prototype and so on creating a chain that goes all the way up to the root Object object. This is called the prototype chain.


## Creating Objects with no specific prototype
When we create a POJO (Plain old Javascript Object), the prototype of the object is `Object.prototype`. When we create an object using a constructor function, the prototype of the object is the prototype of the constructor function.

```javascript
const p = {x: 1};
console.log(Object.getPrototypeOf(p) === Object.prototype); // true
```

## Creating Objects with a specific prototype
We can use the object literal syntax to create an object with a specific prototype.

```javascript
const prototype_obj = {x: 1};
const q = { y: 2, __proto__: prototype_obj };
console.log(q.x); // 1
```

We can also use the `Object.create()` method to create an object with a specific prototype.

```javascript
const prototype_obj = {x: 1};
const q = Object.create(prototype_obj);
q.y = 2;
console.log(q.x); // 1
```

We can also change the prototype of an object using the `Object.setPrototypeOf()` method.

```javascript
const prototype_obj = {x: 1};
const q = { y: 2 };
Object.setPrototypeOf(q, prototype_obj);
console.log(q.x); // 1
```



### How are parent members accessed

When we access a property on an object, it will be searched on the object and on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.


## How to Get Prototype

You can get the prototype of an object using the `Object.getPrototypeOf()` method.

```javascript
const person = {
    name: 'John',
    age: 30
}

const prototype = Object.getPrototypeOf(person);

console.log(prototype); // This will print {}
```

## How to Set a Prototype

You can set the prototype of an object using the `Object.setPrototypeOf()` method.

```javascript
const person = {
    name: 'John',
    age: 30
}


const prototype = {
    sayHello(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

Object.setPrototypeOf(person, prototype);

person.sayHello(); // This will print 'Hello, my name is John'
```

Note: `obj.__proto__` is deprecated and should not be used.   
However, `{ name: 'John', age: 30 , __proto__: prototype }` is equivalent to Object.setPrototypeOf(person, prototype).


## Prototype Chain


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

class Employee extends Person {
    constructor(name, title){
        super(name);
        this.title = title;
    }
}

class Manager extends Employee {
    
}

console.log(Object.getPrototypeOf(Manager) === Employee); // true
console.log(Object.getPrototypeOf(Employee) === Person); // true
console.log(Object.getPrototypeOf(Person)); // prints {}

const person = new Person('John');
console.log(Object.getPrototypeOf(person)); // prints "{}"

const employee = new Employee('John', "Developer");
console.log(Object.getPrototypeOf(employee)); // prints "Person {}" and not "Employee {}". So, parent class is printed as prototype.

const manager = new Manager('John');
console.log(Object.getPrototypeOf(manager)); // prints "Employee {}" and not "Manager {}". So, parent class is printed as prototype.

```

One can also create a child object from another object using `Object.create()` method.

```javascript
const person = {
    name: 'John',
    age: 30
}

const employee = Object.create(person);
employee.title = 'Developer';

console.log(employee.name); // This will print 'John'
console.log(employee.title); // This will print 'Developer'
```


## Guidelines
1. `__proto__` in object literals is a property that is used to set the initial prototype of the object. This syntax is standardized for ES6. So, `{ name: 'John', age: 30 , __proto__: prototype }` is good too.
2. Deprecated obj.__proto__ is a getter/setter method for the [[Prototype]] of the object. It is non-standard and should not be used. 
3. `Object.getPrototypeOf()` and `Object.setPrototypeOf()` are the standard methods to get and set the prototype of an object.


