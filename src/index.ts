import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { buildSchema } from 'type-graphql';
import { HelloWorldResolver } from './resolvers/HelloWorld.resolver';
import { ProgrammingLanguageResolver } from './resolvers/ProgrammingLanguage.resolver';

(async () => {
  const app = express();

  await createConnection();

  const apolloServer = new ApolloServer({
    typeDefs: './src/schema.graphql',
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    schema: await buildSchema({
      resolvers: [HelloWorldResolver, ProgrammingLanguageResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log(`
        🚀 Server is running!
        Listening on port 4000
        Explore at http://localhost:4000/graphql
    `);
  });
})();
