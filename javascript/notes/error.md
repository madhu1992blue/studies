# Error

```javascript
let error = new Error('This is an error'); // Create an error object with message 'This is an error'.
console.log(error.message); // This will print 'This is an error'
console.log(error.name); // This will print 'Error'
console.log(error.stack); // This will print the stack trace
```

In above example, error message is 'This is an error'. Error name is 'Error'. Stack trace is printed using `error.stack`.
Error message is a human-readable description of the error. Error name is a string that describes the type of error. Stack trace is a string that represents the stack trace of the error.

# Throw and catch an Error

```javascript
try {
    throw new Error('This is an error'); // Once an error is thrown, the code execution in try block stops and the control is transferred to the catch block.
    x = 10; // This will not be executed
    console.log(x); // This will not be executed
} catch (err) { // We capture the thrown error in this variable err.
    console.log(err.message); // This will print 'This is an error'
    console.log(err.name); // This will print 'Error'
    console.log(err.stack); // This will print the stack trace
}
```

# Custom Error

```javascript
class CustomError extends Error {
    constructor(message) {
        super(message); // Call the parent class constructor with the message
        this.name = 'CustomError'; // Set the name of the error
    }
}

try {
    throw new CustomError('This is a custom error'); // Throw a custom error
} catch (err) {
    console.log(err.message); // This will print 'This is a custom error'
    console.log(err.name); // This will print 'CustomError'
    console.log(err.stack); // This will print the stack trace
}
```

In above example, we have created a custom error class `CustomError` that extends the `Error` class. We have set the name of the error to 'CustomError'. We have thrown a custom error and caught it in the catch block.

# Finally Block

The finally block is always executed whether an error is thrown or not. It is used to clean up resources. Even if the catch block throws an error, the finally block will still be executed.
Example:

```javascript

try {
    throw new Error('This is an error');
} catch (err) {
    console.log(err.message);
} finally {
    console.log('This is the finally block'); // Always executed irrespective of whether an error is thrown or not in the try block or catch block.
}
```

# Some Gotchas

Javacript allows you to throw any value, not just an error object. However, it is recommended to throw an error object.

```javascript
try {
    throw 'This is not an error'; // This is not an error object
} catch (err) {
    console.log(err); // This will print 'This is not an error'.
    // However, one may assume it is an error object and try to access properties like message, name, stack etc. which will result in an error.
    console.log(err.message); // This will throw an error 'Cannot read property 'message' of undefined'
}
```

To improve the above code, we can throw an error object instead of a string.

```javascript

try {
    throw new Error('This is an error'); // Throw an error object
} catch (err) {
    console.log(err.message); // This will print 'This is an error'
}
```

But what about code written by others? We can't control what others write. So, it is always better to handle such cases.

```javascript
try {
    throw 'This is not an error'; // This is not an error object
} catch (err) {
    if (err instanceof Error) { // Check if the thrown value is an instance of Error
        console.log(err.message); // This will not be executed for string.
    } else {
        console.log(err); // This will print 'This is not an error'
    }
}
```

Note: While checking if the thrown value is an instance of Error, we are using `err instanceof Error`. This is because `typeof err` will return 'object' for an error object and 'string' for a string. So, we can't use `typeof err === 'object'` to check if the thrown value is an error object.

Also, this may not work if the error object is created in another window or iframe. In such cases, you can try duck typing.

```javascript
try {
    throw 'This is not an error'; // This is not an error object
} catch (err) {
    if (err && err.message && err.name && err.stack) { // Duck typing
        console.log(err.message); // This will not be executed.
    } else {
        console.log(err); // This will print 'This is not an error'
    }
}
```
None of the above methods are foolproof. So, it is always better to throw an error object.




