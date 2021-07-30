import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { buildSchema } from "type-graphql";
import { HelloWorldResolver } from "./resolvers/HelloWorld.resolver";
import { ProgrammingLanguageResolver } from "./resolvers/ProgrammingLanguage.resolver";

(async () => {
  const app = express();

  await createConnection();

  const apolloServer = new ApolloServer({
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
    schema: await buildSchema({
      resolvers: [HelloWorldResolver, ProgrammingLanguageResolver]
    }),
    context: ({ req, res }) => ({ req, res })
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log("express server started");
  });

})();