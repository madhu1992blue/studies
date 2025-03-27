# Loops

## For Loop

```javascript
for(let i = 0; i < 5; i++){
    console.log(i);
}
```

## Break and Continue

```javascript
// Break example
// This will print 0, 1, 2
for(let i = 0; i < 5; i++){
    if(i === 3){
        break;
    }
    console.log(i);
}

// Continue example
// This will print 0, 1, 2, 4
for(let i = 0; i < 5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
}
```

## While Loop

```javascript
let i = 0;
while(i < 5){
    console.log(i);
    i++;
}
```


## For...in Loop - Loop over keys of an object

```javascript
const person = {
    name: 'John',
    age: 30
}

for(const key in person){
    console.log(key, person[key]);
}
```

First non-zero integer keys will be traversed in ascending order, then the string keys will be traversed in insertion order.
Traversal order is well defined and consistent across different JavaScript engines.

## For...of Loop over elements of an array

```javascript
const arr = [1, 2, 3, 4, 5];

for(const num of arr){
    console.log(num);
}
```

## Good Practice

### Const in for...of and for...in loop

Use `const` instead of `let` in the `for...of` and `for...in` loop?

Using `const` ensures that the variable is not reassigned within the loop body.
A new scope is created for each iteration of the loop which includes the loop control variable. So, that's why `const` works in the loop even though it appears to reassign the same loop control variable.

```javascript
const arr = [1, 2, 3, 4, 5];

for(const num of arr){ // num is a new variable in each iteration and it's called loop control variable. num in the next iteration is a different variable than num in the previous iteration as a new scope is created for each iteration.
    console.log(num);
}

const person = {
    name: 'John',
    age: 30
}

for(const key in person){ // key is a new variable in each iteration and it's called loop control variable. key in the next iteration is a different variable than key in the previous iteration as a new scope is created for each iteration.
    console.log(key, person[key]);
}
```





