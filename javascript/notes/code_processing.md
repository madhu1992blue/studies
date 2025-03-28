# Requirements for Code Processing

1. We may want to support older runtimes that do not support the latest JS features.
2. We may want to use the latest JS features in our code but the browser may not support them.
3. We may want to use multiple JS files in our project but we do not want to make multiple requests to the server.
4. We may want to use a different language that compiles to JS like TypeScript, CoffeeScript, etc.

- To convert one language to another like Typescript to JS, we use a transpiler like typescript compiler.
- To convert new JS code that can run in older runtime, we use a transpiler like babel.
- To add missing API's to the browser, we use polyfills. Some transpilers like babel can also add polyfills.
- To bundle all JS into a single file, we use a bundler like webpack, parcel, rollup, vite, etc.



## Polyfill

Some API's may not be available in all browsers. You can use polyfills to add these API's to the browser.
These are just JS code that adds the missing API's to the browser.


## transpiler

Sometimes, you may want to use the latest JS features in your code but the browser may not support them. Some programs like babel can take your modern code and convert it into older code that the browser can understand. This process is called transpiling.


### Learn Babel

Install babel:

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

- babel/core: The core babel package.
- babel/cli: The command line interface for babel for running babel commands.
- babel/preset-env: A preset that includes all the plugins needed to convert modern JS code to older code.

Configure babel:

Create a file named `.babelrc` in the root of your project.

```json
{
  "presets": [
    [
      "@babel/preset-env", {
        "modules": false
      }
    ]
  ]
}
```
Note: modules: false is used to tell babel not to convert ES6 modules to CommonJS modules.

Run babel:

```bash
npx babel src --out-dir transpiled
```

The above will transpile all files in the src directory and output them to the transpiled directory.

### Bundlers

Bundlers are tools that take all your JS files and combine them into a single file. This can help reduce the number of requests made to the server and improve performance. 
There are some popular bundlers like Webpack, Parcel, Rollup, Vite, etc.
They can minify the code, remove unused code, and optimize the code for production. 
Then can even code split the code into multiple files for better performance so that chunks of code are loaded only when needed.
They also create source maps for debugging purposes so that you can see the original code in the browser instead of the minified code.

Installing vite:

```bash
npm install --save-dev vite
```

Configure vite:

Create a file named `vite.config.js` in the root of your project.

```js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      formats: ["es"],
    },
  },
});
```

We are saying we want to create a library (build.lib). We ask vite to use the entry file src/index.js and create a library in ES format starting from the entry file. We ask for the ES format because we want to use the latest JS features.
It automatically creates a dist directory with the bundled files. The file will be named same as the module name in the package.json file.
Ex: If package.json file has the name "my-project", the output file will be dist/my-project.js.

We can adjust the script in the package.json file to run vite:

```json
{
  "scripts": {
    "build": "vite build"
  }
}
```
This will allow us to run the command `npm run build` to run vite.

Run vite:

```bash
npx vite build # This creates a dist directory with the bundled files.
```


