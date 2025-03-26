# If conditions

```javascript
    if (height > 4) {

    } else if (height > 2) {

    } else {

    }
```

# Common Comparison Operators

```javascript
    var x = 10;
    var y = 20;
    console.log(x == y); // false ; Don't use this. This is weak equality check where it converts the types and then checks if needed. Ex: 5 == '5' is true.
    console.log(x === y); // false; Yes. It's triple equals. Always this for equality check. This is strict equality check.
    console.log(x != y); // true; Don't use this. This is weak inequality check where it converts the types and then checks if needed. Ex: 5 != '5' is false.
    console.log(x !== y); // true; Always this for inequality check. This is strict inequality check.
    console.log(x > y); // false
    console.log(x < y); // true
    console.log(x >= y); // false
    console.log(x <= y); // true
```


# Logical Operators

&&  - AND : Both conditions should be true
||  - OR : At least one condition should be true
!   - NOT : Negates the condition

```javascript
    true && true; // true
    true && false; // false
    true || false; // true
    false || false; // false
    !false; // true
    !true; // false
```


# Switch case

```javascript
    var day = 2;
    switch (day) {
        case 1:
            console.log("Monday");
            break; // Without break, it will continue to the next case.
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        default: // Special case when no above case is matched.
            console.log("Invalid day");
    }
```

# Ternary Operator

```javascript
    var age = 20;
    var canVote = (age >= 18) ? "Yes" : "No";  // If age is greater than or equal to 18, then Yes, else No.
    console.log(canVote); // Yes
```

# Falsy and Truthy values

## Falsy values

- false
- 0
- -0
- ""
- null
- undefined
- NaN
- 0n
- document.all

## Truthy values

Any value that is not falsy is truthy. So, even empty array or object is truthy.


# Nullish Coalescing Operator

This is used to check if a value is null or undefined and then assign a default value.

```javascript
    var x = null;
    var y = x ?? 10; // If x is null or undefined, then assign 10 to y.
    console.log(y); // 10
```