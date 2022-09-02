# apollo-api / 01 NodeJS Yarn
Apollo API
## Get starter
Install nodejs: https://nodejs.dev/en/download/

Install Yarn
```log
npm i -g yarn
```
Initialize project with Yarn
```log
yarn init
```
Add script in package.json with command start for run project
```json
{
  ...
  "scripts": {
    "start": "node ./src/index.js"
  }
}
```
Create src/index.js
```javascript
const msg = "Hello World!";
console.log(msg);
```
Start project with Yarn
```bash
$ yarn start
yarn run v1.22.19
$ node ./src/index.js
Hello World!
Done in 0.34s.
```