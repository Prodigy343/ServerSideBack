import { ApolloServer } from 'apollo-server';
import { typeDefs } from './graphql/types';
import { resolvers } from './graphql/resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req})
});

server.listen({ port: 4000 })
    .then(res => {
        console.log(`Server running at ${res.url}`)
    });