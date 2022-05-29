import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';

import typeDefs from './schema'
import resolvers from './resolvers'
import models, { sequelize } from './models';

import { createRefreshTokenPOST } from "./auth/auth";
import bodyParser from 'body-parser';

const graphqlUploadExpress = require('graphql-upload/graphqlUploadExpress.js');

async function startApolloServer(typeDefs: any, resolvers: any) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      csrfPrevention: true,
      context: {models},
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    app.get("/", (_req,res) => res.send("Hi"))
        
    app.post("/refresh_token", createRefreshTokenPOST)

    await server.start();

    app.use(graphqlUploadExpress({uploadDir : "./upload"}), bodyParser);

    server.applyMiddleware({ app });
    await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));

    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

sequelize.sync().then(() => startApolloServer(typeDefs, resolvers) )