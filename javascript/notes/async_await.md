# Async/Await

Promises are a great way to handle asynchronous operations. However, they can be a bit cumbersome to work with. This is where async/await comes in. Async/await is a new way to write asynchronous code that is more readable and easier to understand.

Let's see how promises, then and catch methods can be replaced with async/await.

## Using Promises

```javascript
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success');
  }, 1000);
});

p.then((value) => {
  console.log(value);
}).catch((reason) => {
  console.log(reason);
});
```

## Using Async/Await

```javascript
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success');
  }, 1000);
});

async function main(){
  try {
    let value = await p; // Wait for the promise to settle
    console.log(value);  // What was in the onFulfilled callback is now here
  } catch (err) {
    console.log(err); // What was in the onRejected callback is now here
  }
}

main();
```

### We can even create new promises with async keyword for a function

When a function is declared with the `async` keyword, it will always return a promise. The value returned by the function will be wrapped in a promise automatically. The error thrown by the function will also be wrapped in a promise automatically.

Promise that settles to 'Success' value:

```javascript
async function createPromise(){
  return 'Success'; // This will be wrapped in a promise automatically
}

async function main(){
  let value = await createPromise();
  console.log(value);
}

main();
```

Promise that settles to 'Error' value:

```javascript
async function createPromise(){
  throw new Error('Error'); // This will be wrapped in a promise automatically
}

async function main(){
  try {
    let value = await createPromise();
    console.log(value);
  } catch (err) {
    console.log(err);
  }
}

main();
```

## await vs then syntax

The `await` keyword can only be used inside an `async` function or a module. The `then` method can be used outside an `async` function.

```javascript
let p = new Promise((resolve, reject) => {
  resolve('Success');
});

async function main(){
  let value = await p; // await fetches the settled value of the promise. If the promise is rejected, it throws an error which can be caught using the try and catch blocks.
  console.log(value);
}

main();

p.then((value) => {
  console.log(value); // The then method is used to access the settled value of the promise
});
```

## Error Handling

The `try` and `catch` blocks can be used to handle errors in async/await code.

```javascript
async function createPromise(){
  throw new Error('Error');
}

async function main(){
  try {
    let value = await createPromise(); 
    console.log(value); 
  } catch (err) {
    console.log(err); // This will get the reason error object (analogous to how the onRejected callback gets the "reason" error object). If the promise is rejected, the catch block will be executed.
  }
}

main();
```


## Details

### Declaring an async function

An `async function` creates a binding of a new async function (AsyncFunction object) to a given name. The await keyword is permitted within async functions enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding need to create promise chains.

```javascript

async resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
```

## What does await do?

The `await` keyword is used to pause the execution of the async function and wait for the promise to settle. The `await` keyword can only be used inside an `async` function or within modules. The `await` keyword fetches the settled value of the promise. If the promise on which it is invoked is rejected, it throws an error which can be caught using the `try` and `catch` blocks.


Example to demonstrate the use of `await`, `try` and `catch`:

```javascript
async function createPromise(){
  throw new Error('Error');
}

async function main(){
  try {
    let value = await createPromise(); 
    console.log(value); 
  } catch (err) {
    console.log(err); // This will get the reason error object (analogous to how the onRejected callback gets the "reason" error object). If the promise is rejected, the catch block will be executed.
  }
}

main();
```

## Async functions always return a promise

In an async function, When return value is a promise, it will return a new promise object that adopts the state and result of the promise that was returned:
```javascript
let p =  new Promise((resolve, reject) => {
    resolve('Success');
});
async function createPromise(){
  return p; // Though this appears as though p will be returned to user, a new promise object that matches the state of p will be returned.
}

async function main(){
  let value = await createPromise();
  console.log(value);
}


main();
```

In an async function, When return value is not a promise, it will automatically wrap the value in a promise:
```javascript
async function createPromise(){
  return 'Success'; // This will be wrapped in a promise automatically.
}

async function main(){
  let value = await createPromise();
  console.log(value);
}

main();
```


## Async/await is cleaner than promise chaining