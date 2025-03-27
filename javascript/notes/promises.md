# Promise

A promise is an object that represents the eventual completion or failure of an asynchronous operation. A promise is in one of these states:
- Pending: Initial state, neither fulfilled nor rejected.
- Fulfilled: The operation completed successfully.
- Rejected: The operation failed.


The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error).
If fulfilled or rejected, the associated handlers queued up by a promise's `then` method are called.

A promise is said to be settled if it is either fulfilled or rejected, but not pending.

A promise is said to be resolved, which means it is either settled or "locked in" to match the state of another promise and further fulfilling it or rejecting it will have no effect.

Caution: Colloquially, "resolved" promises are equivalent to "fulfilled" promises but in real terminology, "resolved" promises are either be pending, fulfilled or rejected as well.
Real terminology can be read from [States and Fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md)

Let's take an example to see this:

```javascript

let p = new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  ); 
});
// In this case, the promise 'p' is resolved immediately when promise 'p' is created as we call resolveOuter but 'p' is not settled(fulfilled or rejected) until 1 second later when the inner promise is settled (fulfilled in this case).
// Calling the resolve callback doesn't mean its settled. However, the promise is considered settled only when the promise that is passed to the resolve callback is settled.
```

In the above example, the resolveOuter is called immediately with a promise value. So, until the promised passed to the the resolveOuter is settled, the promise 'p' is not settled while is considered resolved. 


- If the resolve callback is called with another promise, the state will be determined by the state of the promise passed to the resolve function.
    - If the promise passed to the resolve function is pending, the current promise remains pending until the inner promise settles
    - if the promise passed to the resolve function is fulfilled, the current promise is fulfilled and resolved.
    - If the promise passed to resolve is rejected, the current promise is rejected with the same reason.
- If the resolve callback is called with a non-promise value, the current promise is resolved and fulfilled. 
- If the reject callback is called with a value, the current promise is rejected.
- If an error is thrown in the executor function, the current promise is rejected with the error thrown.

```javascript

const outerPromise = new Promise((outerResolve, outerReject) => {
    let anotherPromise = new Promise((innerResolve, innerReject) => {
        setTimeout(() => {
            innerResolve('Fullfillment value comes from anotherPromise in this case');
        }, 10000);
    });
    outerResolve(anotherPromise); // outerResolve is executed immediately but the promise is not settled until anotherPromise is settled.
});

await outerPromise.then(value => console.log(value)); // This will print 'Fullfillment value comes from anotherPromise in this case' after 10 seconds. 
```

```javascript

const outerPromise = new Promise((outerResolve, outerReject) => {
    let anotherPromise = new Promise((innerResolve, innerReject) => {
        setTimeout(() => {
            innerReject(new Error('Error reason value comes from anotherPromise in this case'));
        }, 10000);
    });
    outerResolve(anotherPromise); // outerResolve is executed immediately
});

await outerPromise.then(value => console.log(value), err => console.error(err.message)); // This will print 'Error reason value comes from anotherPromise in this case' after 10 seconds. 

``` 

## .then method on promise

`.then` method takes 2 arguments, the first one is a callback function that is called when the promise is fulfilled and the second one is a callback function that is called when the promise is rejected. The then method returns a new promise.

```javascript
let p = new Promise((resolve, reject) => {
  resolve('Success');
}); 

function onFulfilled(value){  // Notice that is callback is called 'onFulfilled' and not 'onResolve'. The value is also the fulfillment value received not the resolve value which could have been a promise. 
  console.log(value);
}
function onRejected(reason){ // It's a good practice to handle the rejection of a promise. Also, expect error object as reason as a good practice while any other value can be passed as a reason. So, design your APIs well even if others don't.
  console.log(reason);
}
p.then(onFulfilled, onRejected); // The then method has 2 callbacks for handling onFullfilled and onRejected.
```

### What value is passed to the onFulfilled and onRejected callback?

Let's understand the fulfillment value passed to the onFulfilled callback.

- If a promise is resolved with a non-promise value, the fulfillment value is the value passed to the resolve callback.
- If a promise is resolved with another promise and if the inner promise is fulfilled, the fulfillment value is the fulfillment value of the inner promise. This is recursive. So, if the inner promise is resolved with another promise, the fulfillment value is the fulfillment value of the innermost promise. 
- If a promise is resolved with another promise and if the inner promise is rejected, the onRejected callback is called.
- If a promise is resolved with another promise, it waits for the inner promise to settle. If the inner promise is fulfilled, onFulfilled is called with its fulfillment value. If the inner promise is rejected, onRejected is called with its rejection reason.
- If a promise is rejected with a value, the onRejected callback is called with the value passed to the reject callback.


### Since the then method returns a new promise, how to settle the promise returned by the then method?
The promise returned by the then method is settled based on the return value of the onFulfilled and onRejected callbacks.

Let's assume that 'p' is the promise returned by the then method.

- If the callback invoked returns a non-promise value, the promise ,p  ,returned by the then method is resolved with the value returned by the callback.
- If the callback invoked returns a fulfilled promise, the promise, p,  returned by the then method is resolved with the same fulfillment value as the fulfilled promise.
- If the callback invoked returns a rejected promise, the promise, p, returned by the then method is rejected with the same rejection reason as the rejected promise.
- If the callback invoked throws an error, the promise, p, returned by the then method is rejected with the error thrown by the callback.
- If the callback invoked returns a pending promise, the promise, p, returned by the then method is settled based on the state of the promise returned by the callback. If the promise returned by the callback is fulfilled, the promise, p, returned by the then method is resolved with the fulfillment value of the promise returned by the callback. If the promise returned by the callback is rejected, the promise, p, returned by the then method is rejected with the rejection reason of the promise returned by the callback.
- If the callback doesn't return anything, the promise, p, returned by the then method is resolved with undefined.


### Alternate way to handle fulfillment and rejection of a promise

The then method can also be called with only one argument. This argument is a callback function that is called when the promise is fulfilled.  We can then chain this with another `.catch` method to handle the rejection of the promise.

```javascript
let p = new Promise((resolve, reject) => {
  resolve('Success');
});

function onFulfilled(value){
  console.log(value);
}

function onRejected(reason){
  console.log(reason);
}

p.then(onFulfilled).catch(onRejected); // The then method is called with only one argument. The catch method is called to handle the rejection of the promise.
```

This is called chaining. The then method returns a promise which can be chained with another then method or a catch method.

### Chaining multiple then methods

The then method returns a promise. This promise can be chained with another then method. The value returned by the first then method is passed to the second then method.

```javascript
let p = new Promise((resolve, reject) => {
  resolve('Success');
});

function onFulfilled(value){
  console.log(value);
  return 'Another success';
}

function onRejected(reason){
  console.log(reason);
}

p.then(onFulfilled).then(onFulfilled).then(onFulfilled).catch(onRejected); // The then method is chained with another then method.
```

## How to wait for promise to settle?

The `await` keyword can be used to wait for a promise to settle. The `await` keyword can only be used inside an `async` function.

```javascript
let p = new Promise((resolve, reject) => {
  resolve('Success');
});

async function main(){
  let value = await p;
  console.log(value);
}

main();
```

# Caution

If a promise is neither fulfilled nor rejected, it will always remain pending. So, always make sure to resolve or reject a promise. 
