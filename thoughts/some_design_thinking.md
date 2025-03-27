# Code is written for humans not computers

Code is written for humans to read and understand, not for computers to execute. Computers are good at executing code, humans are good at understanding code. When writing code, always think about the person who will read it next. Make it easy for them to understand what you are trying to do.

# Factory to make creating similar objects easier

People keep forgetting to do something, create a factory function that does it for them. For example, if we wanted all our error messages to be prefixed with "Error: ", we can create a factory function that does this for us.

```javascript
function createError(message){
    return new Error(`Error: ${message}`);
}

try {
    throw createError('This is an error');
} catch (error) {
    console.log(error.message); // This will print 'Error: This is an error'
    console.log(error.name); // This will print 'Error'
    console.log(error.stack); // This will print the stack trace
}
```


