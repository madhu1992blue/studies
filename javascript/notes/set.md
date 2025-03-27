# Sets in JavaScript

Sets are a new data structure in JavaScript that allow you to store unique values of any type. The values can be primitive types or objects.

## Creating a Set

You can create a set using the `new Set()` constructor.

```javascript
const set = new Set();
```

You can also pass an array to the `Set` constructor to create a set with the elements of the array.

```javascript
const set = new Set([1, 2, 3, 4, 5,6, 3, 2, 1]);

console.log(set); // This will print: Set {1, 2, 3, 4, 5, 6}
```

## Adding Elements to a Set

You can add elements to a set using the `add` method. Duplicate elements will not be added to the set but will not throw an error.

```javascript
const set = new Set();

set.add(1);
set.add(2);
set.add(2); // This will not add the element since it is a duplicate but will not throw an error
set.add(3);

console.log(set); // This will print: Set {1, 2, 3}
```

## Deleting Elements from a Set

You can delete elements from a set using the `delete` method.

```javascript
const set = new Set([1, 2, 3]);

set.delete(2);

console.log(set); // This will print: Set {1, 3}
```

## Spread Operator with Sets

You can use the spread operator to convert a set to an array.

```javascript
const set = new Set([1, 2, 3]);

const arr = [...set];

console.log(arr); // This will print: [1, 2, 3]
```

## Iterating Over a Set

You can use the `for...of` loop to iterate over a set.

```javascript
const set = new Set([1, 2, 3]);

for(const item of set){
    console.log(item);
}
```

## Checking if an Element Exists in a Set

You can check if an element exists in a set using the `has` method.

```javascript
const set = new Set([1, 2, 3]);

console.log(set.has(2)); // This will print: true
console.log(set.has(4)); // This will print: false
```


## ForEach Method

You can use the `forEach` method to execute a function for each element in the set.

```javascript
const set = new Set([1, 2, 3]);

set.forEach(item => {
    console.log(item);
});
```


## Set Composition

You can create a set from another set using the `Set` constructor.

```javascript
const set1 = new Set([1, 2, 3]);
const set2 = new Set(set1);

console.log(set2); // This will print: Set {1, 2, 3}
```

### Intersection of Sets (.intersection method) - Does't mutate the original set

You can get the intersection of two sets using the `intersection` method.

```javascript
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);

const intersection = set1.intersection(set2);

console.log(intersection); // This will print: Set {2, 3}
```

### Union of Sets (.union method) - Does't mutate the original set

You can get the union of two sets using the `union` method.

```javascript
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);

const union = set1.union(set2);

console.log(union); // This will print: Set {1, 2, 3, 4}
```

### Difference of Sets (.difference method) - Does't mutate the original set

You can get the difference of two sets using the `difference` method.
This gives a new set with the elements that are in the first set but not in the second set.

```javascript
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);

const difference = set1.difference(set2);

console.log(difference); // This will print: Set {1}
```


## Set Size (Yeah... Its not set.length, its set.size)

You can get the size of a set using the `size` property.

```javascript
const set = new Set([1, 2, 3]);

console.log(set.size); // This will print: 3
```