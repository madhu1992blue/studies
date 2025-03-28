## setTimeout

Used to schedule a callback to be run after a certain delay. The delay is specified in milliseconds. The callback will be executed after the delay has passed, but it is not guaranteed to be executed exactly after the delay. The actual execution time may vary depending on the system load and other factors.

Example:
```javascript
setTimeout(() => {
  console.log("This message will be displayed after 2 seconds");
}, 2000);
```
The above code will display the message "This message will be displayed after 2 seconds" after a delay of 2 seconds.

## setInterval

Used to repeatedly call a callback after the interval.

Example:

```javascript
setInterval(() => {
  console.log("This message will be displayed every 2 seconds");
}, 2000);
```

The above code will display the message "This message will be displayed every 2 seconds" every 2 seconds.