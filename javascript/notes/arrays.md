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


# .slice - get a portion of the array (Does not mutate the array)

```javascript
const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 3);
console.log(sliced); // This will print [2, 3]
```

.slice can also be used with strings.

```javascript
const str = 'hello';
const sliced = str.slice(1, 3);
console.log(sliced); // This will print 'el'
```

.slice can also be used to copy an array.

```javascript
const arr = [1, 2, 3];
const copy = arr.slice();
console.log(copy); // This will print [1, 2, 3]
```

.slice can also do negative indexing.

```javascript
const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(-2);
console.log(sliced); // This will print [4, 5]
```

The first argument is the start index and the second argument is the end index. The end index is exclusive.
If the end index is not provided, it will slice till the end of the array.

Negative indexing can be understood as array.length + index where index is negative.

```javascript
const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, -1); // So end index is array.length - 1. Since end index is exclusive, it will slice till value 4.
console.log(sliced); // This will print [2, 3, 4]
```


# const arrays

const array variables can be modified but the array itself cannot be reassigned.

```javascript
const arr = [1, 2, 3];
arr.push(4); // This is valid as we are modifying the array but not reassigning the variable.
console.log(arr); // This will print [1, 2, 3, 4] 
```

```javascript
const arr = [1, 2, 3];
arr = [4, 5, 6]; // This will throw an error as we are trying to reassign the variable.
```

