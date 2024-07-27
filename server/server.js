import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose'; 

import typeDefs from './schema.js';
import resolvers from './resolvers.js';

const dbConnection = async () => {
    const response = await mongoose.connect('mongodb://localhost:27017/online-platform')
    if(response) { 
        console.log('Connected to db'); 
    }else { 
        console.log('Connection to db failed'); 
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

dbConnection();
console.log(`🚀  Server ready at: ${url}`);
