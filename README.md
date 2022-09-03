# apollo-api / 03 Apollo Server
Apollo API
## Get starter
Add modules
```console
yarn add graphql apollo-server
```
Add developer modules
```console
yarn add -D nodemon
```

Add script in package.json with command dev
```json
{
 ...
  "scripts": {
    *...*
    "dev": "nodemon ./src/index.ts"
  },
  ...
}
```
Create src/index.ts
```javascript
import { ApolloServer } from "apollo-server";

const msg: string = "Hello World!";

// QUERY
const typeDefs = `
    type Query {
        message: String!
    }
`;

// RESOLVERS
const resolvers = {
  Query: {
    message: () => msg,
  },
};

// APOLLO SERVER
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
```
Run dev project with Yarn
```bash
$ yarn dev
yarn run v1.22.19
$ nodemon ./src/index.ts
[nodemon] 2.0.19
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node ./src/index.ts`
Server is running on http://localhost:4000/
```
![user table](resource/img/apollo.png?raw=true)

Click in **Query your server**

![user table](resource/img/sandbox_explorer.png?raw=true)