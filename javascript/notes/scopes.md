# Scopes

## Global Scope

### Browser Global Scope

- `window` object is the global scope in the browser.
- `this` keyword refers to the `window` object in the global scope.

### Nodejs Global Scope

- `global` object is the global scope in Node.js.


### Module Scope

#### Browser Module Scope

```html
<script type="module"> // This line creates the module scope for the script
    console.log(this); // This will print the module object
    console.log(window); // This will print the window object
</script>
```

#### ES Module Scope (both in NodeJS and Browsers)

variables declared in top level of the module are scoped to that module.


## Function Scope

- Variables declared inside a function are only accessible inside the function.
- Variables declared outside a function are accessible inside the function.

```javascript
var x = 10; // This is a global variable
function test() {
    var y = 20; // This is a function scoped variable
    console.log(x); // This will print 10
    console.log(y); // This will print 20
}
test();
console.log(x); // This will print 10
console.log(y); // This will throw an error because y is not defined
```

## Block Scope

- Variables declared inside a block are only accessible inside the block.

```javascript
var x = 10; // This is a global variable
if (true) {
    let y = 20; // "y" is a block scoped variable because of let
    console.log(x); // This will print 10
    console.log(y); // This will print 20
}
// y is not accessible here
console.log(x); // This will print 10
console.log(y); // This will print 20
``` 
