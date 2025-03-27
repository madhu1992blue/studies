# Maps


- .set(key, value) : Add a key-value pair to the map
- .get(key) : Get the value of a key
- .has(key) : Check if a key exists
- .delete(key) : Delete a key-value pair
- .clear() : Remove all key-value pairs
- .size : Get the number of key-value pairs
- .keys() : Get the keys
- .values() : Get the values
- .entries() : Get the key-value pairs
- .forEach(callback) : Execute a function for each key-value pair
- spread operator: convert map to array
- merging maps : use spread operator to merge maps


```javascript

const map = new Map();

map.set('name', 'John');
map.set('age', 30);

console.log(map.get('name')); // This will print 'John'
console.log(map.get('age')); // This will print 30

console.log(map.has('name')); // This will print true
console.log(map.has('city')); // This will print false

map.delete('name');

console.log(map.has('name')); // This will print false

map.clear();

console.log(map.size); // This will print 0

```

You can also pass an array of key-value pairs to the `Map` constructor.

```javascript

const map = new Map([
    ['name', 'John'],
    ['age', 30]
]);

console.log(map.get('name')); // This will print 'John'
console.log(map.get('age')); // This will print 30

```

You can iterate over a `Map` using the `for...of` loop.

```javascript

const map = new Map([
    ['name', 'John'],
    ['age', 30]
]);

for(const [key, value] of map){
    console.log(`${key}: ${value}`);
}

```

You can use the `forEach` method to execute a function for each key-value pair in the map.

```javascript

const map = new Map([
    ['name', 'John'],
    ['age', 30]
]);

map.forEach((value, key, map) => { // The order of arguments is value, key, map 
    console.log(`${key}: ${value}`);
});

```

You can use the `keys`, `values`, and `entries` methods to get the keys, values, and key-value pairs of the map, respectively.

```javascript

const map = new Map([
    ['name', 'John'],
    ['age', 30]
]);

console.log([...map.keys()]); // This will print ['name', 'age']
console.log([...map.values()]); // This will print ['John', 30]
console.log([...map.entries()]); // This will print [['name', 'John'], ['age', 30]]

``` 

You can use the spread operator to convert a map to an array.

```javascript

const map = new Map([
    ['name', 'John'],
    ['age', 30]
]);

const arr = [...map];

console.log(arr); // This will print [['name', 'John'], ['age', 30]]

```

You can use the spread operator to merge two maps.

```javascript

const map1 = new Map([
    ['name', 'John'],
    ['age', 30]
]);

const map2 = new Map([
    ['city', 'New York'],
    ['country', 'USA']
]);

const merged = new Map([...map1, ...map2]);


console.log([...merged]); // This will print [['name', 'John'], ['age', 30], ['city', 'New York'], ['country', 'USA']]

```


# Map vs Object

- Maps can have any type of key, while objects can only have strings and symbols as keys. However, don't use objects as keys in a map. This can get quite confusing as you will need the exact reference to the object to retrieve the value. Use primitive data types as keys in a map as a Good Citizen.

- Maps are iterable, while objects are not (atleast not without some extra work). You can use the `for...of` loop to iterate over a map.

- Maps have a `size` property, while objects do not.

- Objects have other properties and methods that may make it difficult to use them as key-value pairs. Maps are specifically designed for key-value pairs.

- Maps are more performant than objects for large key-value pairs. Insertions and deletions are faster in maps.

- Maps are ordered, while objects are not. The order of key-value pairs is maintained in a map and it will be the same as the order in which they were added.

