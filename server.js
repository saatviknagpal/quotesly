// import ApolloServer, gql and mongoose modules
import { ApolloServer, gql } from "apollo-server";
import mongoose from "mongoose";

// import typeDefs, MONGO_URL
import typeDefs from "./schemaGql.js";
import { JWT_SECRET, MONGO_URL } from "./config.js";

// import ApolloServerPluginLandingPageGraphQLPlayground to enable GraphQL Playground
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

// import models and resolvers from other files for MongoDB
import "./models/Quotes.js";
import "./models/User.js";
import resolvers from "./resolvers.js";
import jwt from "jsonwebtoken";

// connect to MongoDB using mongoose
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// log a message when connected to MongoDB
mongoose.connection.on("connected", () => {
  console.log("connected to DB");
});

// create an ApolloServer instance with typeDefs, resolvers and plugins
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // This middleware is extracting the userId from the authorization header in the request object and returning it.
  context: ({ req }) => {
    const { authorization } = req.headers;
    if (authorization) {
      const { userId } = jwt.verify(authorization, JWT_SECRET);
      return { userId };
    }
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

// start the server and log a message when ready
server.listen(3000).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
