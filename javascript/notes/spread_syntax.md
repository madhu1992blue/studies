# Javascript Spread Syntax

Spread operator does shallow copy of the array or object. It does not do deep copy.
If there are properties with the same name, the rightmost property will override the leftmost property.

The spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

```javascript
const nums = [1, 2, 3];
console.log(...nums); // This will print 1 2 3
```

## Spread in function calls

```javascript
function add(num1, num2, num3){
    return num1 + num2 + num3;
}

const nums = [1, 2, 3];
console.log(add(...nums)); // This will print 6
```

## Spread in array literals

```javascript
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const combined = [...nums1, ...nums2];
console.log(combined); // This will print [1, 2, 3, 4, 5, 6]
```

## Spread with objects

```javascript
const person = {
    name: 'John',
    age: 30
}

const newPerson = {
    ...person,
    city: 'New York'
}

console.log(newPerson); // This will print {name: 'John', age: 30, city: 'New York'}
```

## Spread with strings

```javascript
const str = 'hello';
console.log([...str]); // This will print ['h', 'e', 'l', 'l', 'o']
```

## Spread with function arguments

```javascript
function add(num1, num2, num3){
    return num1 + num2 + num3;
}

const nums = [1, 2, 3];
console.log(add(...nums)); // This will print 6
```

## Spread with rest parameters

```javascript
function add(...nums){
    return nums.reduce((acc, num) => acc + num, 0);
}

const nums = [1, 2, 3];
console.log(add(...nums)); // This will print 6
```


