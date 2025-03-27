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

for(let key in person){
    console.log(key, person[key]);
}
```

First non-zero integer keys will be traversed in ascending order, then the string keys will be traversed in insertion order.
Traversal order is well defined and consistent across different JavaScript engines.

## For...of Loop over elements of an array

```javascript
const arr = [1, 2, 3, 4, 5];

for(let num of arr){
    console.log(num);
}
```
