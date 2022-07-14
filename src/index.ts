import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';

import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'
import models, { sequelize } from './models';

import { createRefreshTokenPOST } from "./auth/auth";
import bodyParser from 'body-parser';
import mediaRoute from "./routes/media"
import { getAuthUserId } from './middleware/isAuth';
var cors = require('cors')

const graphqlUploadExpress = require('graphql-upload/graphqlUploadExpress.js');

async function startApolloServer(typeDefs: any, resolvers: any) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      csrfPrevention: false,
      context: ({req}) => {
        let token = req.headers.authorization || ""
        let authUserId = getAuthUserId(token)
       return {models, authUserId}
      },
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      
    });

    app.use(cors())

    app.use(bodyParser.json())

    app.get("/", (_req,res) => res.send("Hi"))
    app.use("/media", mediaRoute)
        
    app.post("/refresh_token", createRefreshTokenPOST)

    await server.start();

    app.use(graphqlUploadExpress());

    server.applyMiddleware({ app });
    await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));

    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

sequelize.sync().then(() => startApolloServer(typeDefs, resolvers) )