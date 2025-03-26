# Objects

## Object Literals

```javascript
const person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'swimming'],
    address: {
        street: '123 Main St',
        city: 'New York'
    },
    sayHello: function(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

console.log(person.name); // This will print 'John'
console.log(person.hobbies[0]); // This will print 'reading'
console.log(person.address.city); // This will print 'New York'
person.sayHello(); // This will print 'Hello, my name is John'
```
So, we use dot notation to access properties of an object.

If you have key names that are not valid identifiers, you can use bracket notation to access them.
```javascript
const person = {
    'first name': 'John',
    'last name': 'Doe'
}

console.log(person['first name']); // This will print 'John'
console.log(person['last name']); // This will print 'Doe'
```

If key and value variables have the same name, you can use shorthand property names.
```javascript
const name = 'John';
const age = 30;

const person = {
    name,
    age
}

console.log(person.name); // This will print 'John'
console.log(person.age); // This will print 30
```

Adding a new key-value pair to an object.
```javascript
const person = {
    name: 'John',
    age: 30
}

person.hobbies = ['reading', 'swimming'];

console.log(person.hobbies); // This will print ['reading', 'swimming']
```

When we call a function and pass an object as an argument, we are passing the address of the object as value. So, if we change the object inside the function, the object outside the function will also change.
```javascript
const person = {
    name: 'John',
    age: 30
}

function changeName(person){
    person.name = 'Jane';
}

changeName(person);

console.log(person.name); // This will print 'Jane'
```

## Optional Chaining

Optional chaining allows you to access nested properties without having to check if each level is defined.
```javascript
const person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York'
    }
}

console.log(person.address?.city); // This will print 'New York'
console.log(person.address?.zip); // This will print undefined
``` 

- Use Optional chaining only when you are sure that the property you are trying to access may not exist.
- Don't use Optional chaining when you are sure that the property you are trying to access exists.


## Object methods

```javascript
const person = {
    name: 'John',
    age: 30,
    sayHello(){ //style 1 - ES6 syntax
        console.log(`Hello, my name is ${this.name}`); //this refers to the object like self in python
    }

    sayHi: function(){ // style 2
        console.log(`Hi, my name is ${this.name}`); // this refers to the object like self in python
    }
}
```
Between style 1 and style 2, style 1 is preferred because it is more concise.



## const objects

You can change the properties of a const object but you cannot reassign the object itself.
```javascript
const person = {
    name: 'John',
    age: 30
}

person.name = 'Jane'; // This is allowed because we are not reassiging the person variable but changing contents of the assigned object.
person = {name: 'Jane', age: 30}; // This is not allowed because person is a const.
```

## Checking if a property exists

```javascript
const person = {
    name: 'John',
    age: 30
}

console.log('name' in person); // This will print true
console.log('hobbies' in person); // This will print false

console.log(person.address); // This will print undefined and code will not crash. So, be careful.
```

## Dynamic property names of an object

```javascript
person = {
    name: 'John',
    age: 30
}

propertyName = 'name';
person[propertyName] = 'Jane';

console.log(person.name); // This will print 'Jane'
```
