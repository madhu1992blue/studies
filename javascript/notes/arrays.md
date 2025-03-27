# Arrays

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // This will print 1
console.log(arr[1]); // This will print 2
console.log(arr[2]); // This will print 3
console.log(arr[3]); // This will print 4
console.log(arr[4]); // This will print 5
```

## Array Methods

### push - at end of the array (Mutates the array)

```javascript
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // This will print [1, 2, 3, 4]
```

### length - get the length of the array

```javascript
const arr = [1, 2, 3];
console.log(arr.length); // This will print 3
```

### includes - check if an element exists in the array

```javascript
const arr = [1, 2, 3];
console.log(arr.includes(2)); // This will print true
console.log(arr.includes(4)); // This will print false
``` 

Strings can also be checked using `includes`.

```javascript
const str = 'hello';
console.log(str.includes('e')); // This will print true
console.log(str.includes('a')); // This will print false
```
