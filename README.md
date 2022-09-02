# apollo-api / 02 Typescript
Apollo API
## Get starter
Install nodejs: https://nodejs.dev/en/download/

Install Typescript
```bash
npm i -g typescript
```
Add developer modules
```bash
yarn add -D typescript
```
Create typscript config
```bash
tsc --init
```
Add outDir and rootDir into compilerOptions in tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "exclude": [
    "**/*.spec.ts"
  ],
  "include": [
    "**/*.ts"
  ]
}
```
Add script in package.json with command start and build
```json
{
 ...
  "scripts": {
    "start": "node ./dist/index.js",
    "build": "tsc -p ."
  },
  ...
}
```
Create src/index.ts
```javascript
const msg: string = "Hello World!";
console.log(msg);
```
Build project with Yarn
```bash
$ yarn build
yarn run v1.22.19
$ tsc -p .
Done in 1.10s.
```
Start project with Yarn
```bash
$ yarn start
yarn run v1.22.19
$ node ./dist/index.js
Hello World!
Done in 0.33s.
```

*dist/index.js*
```javascript
"use strict";
const msg = "Hello World!";
console.log(msg);
```