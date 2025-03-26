# Modules in JavaScript

## ES6 Modules are supported in browsers too

ES6 modules are supported in browsers. You can use the `type="module"` attribute in the script tag to use ES6 modules in browsers.

```html
<script type="module" src="main.js"></script>
```

We can write ES6 modules in separate files and import them in the main file.

```javascript
// add.js
export function add(a, b) {
    return a + b;
}
```

```javascript
// main.js
import { add } from './add.js'; // This path is a relative URL that will be resolved to actual URL by the browser and fetched.
console.log(add(1, 2));
```

```html
<!-- We can import a script as a module too. Any script using import or ES6 should be imported as a module. -->
<script type="module" src="main.js"></script>
``` 


Other in-page scripts can also import the module.

```html
<!-- Notice that the script type is set to "module" to indicate ES6. If type="module" is not specified, import cannot be used. -->
<script type="module">
    import { add } from './add.js'; // This path is a relative URL that will be resolved to actual URL by the browser and fetched.
    console.log(add(1, 2));
</script>

```

### Script Importmap in browser

We can specify the import map:

```html
<script type="importmap">
{
    "imports": {
        "add": "./add.js"
    }
}
</script>
```
which can be used like this:

```html
<script type="module" >
    import { add } from 'add'; // "add will be resolved to ./add.js by the importmap."
    console.log(add(1, 2));
</script>
```

## Nodejs Modules

Node.js supports two types of modules:
- CommonJS
- ES6 Modules

The relative path of the module is resolved to the actual path by Node.js. The relative path is resolved from the current file.

package.json file is used to specify the type of module used in the project.

- CommonJS: (default)
    ```json
    {
        "type": "commonjs"
    }
    ```
- ES6 Modules:
```json
{
    "type": "module"
}
```


### CommonJS

#### How to export only one function

- Export:
    ```javascript
    function add(a, b) {
        return a + b;
    }
    module.exports = add;
    ```

- How to import:
    ```javascript
    const add = require('./add.js');
    ```

#### How to export multiple functions

- Export:
    ```javascript
    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    module.exports = {
        add: add,
        subtract: subtract
    };
    ```
- How to import:
    ```javascript
    const { add, subtract }  = require('./add.js');
    ```

#### How to import all functions

- Export
    ```javascript
    const { add, subtract } = require('./add.js');
    ```
- How to import all functions:
    ```javascript
    const * as math = require('./add.js');
    ```

#### How to export a class:

- Export:
    ```javascript
    class Person {
        constructor(name) {
            this.name = name;
        }
        greet() {
            console.log(`Hello ${this.name}`);
        }
    }
    module.exports = Person;
    ```

- How to import a class:
    ```javascript
    const Person = require('./person.js');
    const person = new Person('John');
    person.greet();
    ```
    
#### How to export a variable

- Export
    ```javascript
    const PI = 3.14;
    module.exports = PI;
    ```

- How to import a variable:
    ```javascript
    const PI = require('./constants.js');
    console.log(PI);
    ```

### ES6 Modules

#### How to export a function

- Export
    ```javascript
    export function add(a, b) {
        return a + b;
    }
    ```

- How to import:
    ```javascript
    import { add } from './add.js';
    ```

#### How to export multiple functions

- Export
    ```javascript
    export function add(a, b) {
        return a + b;
    }
    export function subtract(a, b) {
        return a - b;
    }
    ```

- How to import:
    ```javascript
    import { add, subtract } from './add.js';
    ```

#### How to import all functions

- Import
    ```javascript
    import * as math from './add.js';
    ```

#### How to export a class

- Export
    ```javascript
    export class Person {
        constructor(name) {
            this.name = name;
        }
        greet() {
            console.log(`Hello ${this.name}`);
        }
    }
    ```

- How to import a class:
    ```javascript
    import { Person } from './person.js';
    const person = new Person('John');
    person.greet();
    ```

#### How to export a variable:

- Export
    ```javascript
    export const PI = 3.14;
    ```

- How to import a variable:
    ```javascript
    import { PI } from './constants.js';
    console.log(PI);
    ```

#### default export:
- Export:
    ```javascript
    export default function add(a, b) {
        return a + b;
    }
    ```
- How to import:
    ```javascript
    import add from './add.js';
    ```

#### Notes
Notes:you can have both default and named exports in a module.

#### Accessing default export of a ES6 module in CommonJS module

We need to use `.default` to access the default export of an ES6 module in a CommonJS module.
- Export:
    ```javascript
    export default function add(a, b) {
        return a + b;
    }
    ```
- How to import:
    ```javascript
    const add = require('./add.js').default; // Note that you need to use .default to access the default export.
    ```
