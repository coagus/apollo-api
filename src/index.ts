import { ApolloServer } from "apollo-server";

const msg: string = "Hello World!";

const typeDefs = `
    type Query {
        message: String!
    }
`;

const resolvers = {
  Query: {
    message: () => msg,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
