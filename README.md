# apollo-api / 03 Webpack
Apollo API
## Get starter
Add developer modules
```console
yarn add -D ts-node ts-loader webpack webpack-cli webpack-node-externals @types/node
```
Create webpack.config.js
```javascript
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
        ]
    },
    externals: [ nodeExternals() ],
}
```
Add script in package.json with command start and build
```json
{
 ...
  "scripts": {
    "start": "node ./dist/index.js",
    "build": "webpack"
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
```console
$ yarn build
yarn run v1.22.19
$ webpack
asset index.js 51 bytes [emitted] [minimized] (name: main)
./src/index.ts 63 bytes [built] [code generated]
webpack 5.74.0 compiled successfully in 1744 ms
Done in 3.05s.
```
Start project with Yarn
```console
$ yarn start
yarn run v1.22.19
$ node ./dist/index.js
Hello World!
Done in 0.33s.
```

*dist/index.js*
```javascript
(()=>{"use strict";console.log("Hello World!")})();
```