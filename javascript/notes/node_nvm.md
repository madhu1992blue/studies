Create a .nvmrc file in the root of your project with the version of Node.js you want to use. For example:
```bash
echo "21.7.0" > .nvmrc
```
Then, run the following command to use the version specified in the .nvmrc file:
```bash
nvm use
```
This will switch to the version of Node.js specified in the .nvmrc file.

## Create new npm project

To create a new npm project, run the following command:
```bash
npm init
```
This will prompt you to enter information about your project, such as the name, version, description, entry point, test command, repository, keywords, author, and license. You can press Enter to accept the default values or enter your own values.
This creates a package.json file in the root of your project directory, which contains information about your project and its dependencies.

## Understanding package.json

Sample package.json file:
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My project description",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "author": "Your Name",
  "license": "ISC"
}
```

### Scripts Section

The scripts section of the package.json file allows you to define custom commands that can be run using npm. For example, you can define a start script that runs your application:
```json
"scripts": {
  "start": "node index.js"
}
```
You can run this script using the following command:
```bash
npm start
```
This will execute the command specified in the start script, which in this case is `node index.js`.


## Install Dev dependencies

To install development dependencies, use the `-D` or `--save-dev` flag with the npm install command. For example, to install Babel as a development dependency, run the following command:
```bash
npm i -D @babel/core @babel/cli @babel/preset-env
```
