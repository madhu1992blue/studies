# Unittest in JavaScript

# Installation of Test framework 

Let's install Jest, a popular test framework for JavaScript.

```bash
npm install --save-dev jest
```

# Writing a test for a function

Create a file named `sum.test.js` in the `__tests__` directory.

```javascript
const sum = require('../sum'); // Import the sum function from the sum.js file. This is commonJS syntax.

describe('Sum function', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
```


