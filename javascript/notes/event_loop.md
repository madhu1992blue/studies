# Event loop

Javascript is single threaded and is slow in CPU bound tasks. It is good for I/O bound tasks.

Event loop is a single threaded, non-blocking, asynchronous, concurrent execution model that is used to handle multiple tasks concurrently. It is the most important part of Javascript.

Caution: There is something called worker threads that I need to explore too

## Agent

Each autonomous executor of javascript is called an agent. There are multiple agents in the browser environment. Each agent has its own facilities:
- Heap (of objects)
- Queue (of jobs) - This is known in HTML as the event loop, which enables asynchronous processing while being single-threaded. This is also known as the task queue or the message queue.
    We usually now have two queues: the microtask queue and the task queue. The microtask queue is processed before the task queue.
- Stack (of execution contexts) - This is known as call stack and allows transferring control flow by entering and existing contexts like functions. Every job enters by by pushing a new frame onto the (empty) stack and exits by emptying the stack.

Here's a quick summary of the event loop:
- When a function is called, a new frame is pushed onto the stack.
- When a function returns, the frame is popped off the stack.
- When the call stack is empty, the event loop first processes microtasks (promises, queueMicrotask), then moves to the task queue (timers, I/O, other callbacks).
- Asynchronous functions populate these queues, enabling JavaScript to handle multiple operations concurrently.

Example:
```javascript
console.log("main thread")
setTimeout(() => {
    console.log("callback1")
}, 0)

Promise.resolve().then(() => {
        console.log("Microtask1")
    }
).then(() => {
        console.log("Microtask2")
    }
);
console.log("main end")

// Output:
// main thread
// main end
// Microtask1
// Microtask2
// callback1

// Explanation:
// The main thread is executed first.
// The setTimeout is added to the task queue.
// The promise is resolved and the microtasks are added to the microtask queue.
// The main thread ends.
// The microtasks are executed.
// The callback is executed.
```

Each agent is analogous to a thread. Underlying implementation may or may not be a threads.
Each agent can own multiple realms (which 1-1 map to global objects) that can synchronously access each other and thus need to run in a single execution thread.
Each agent also has a single memory model indicating whether its little endian, whether it can be synchronously blocked and whether atomic operations can be lock free.


## What's a realm?

Each agent can own one or more realms. A realm is a set of intrinsic objects, global object, a cache of template literal arrays etc. Each realm has its own global object and intrinsic objects. Each realm is a separate global environment. 

On  web,  realm and  global object are 1-to-1 corresponded. The global object is either a Window, a WorkerGlobalScope, or a WorkletGlobalScope. So for example, every iframe executes in a different realm, though it may be in the same agent as the parent window.


