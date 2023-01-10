import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [User]
    quotes: [Quote]
    user(_id: ID!): User
    iquote(by: ID!): [Quote]
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    quotes: [Quote]
  }
  type Quote {
    name: String
    by: ID
  }

  type Token {
    token: String
  }

  type Mutation {
    signupUser(userNew: UserInput): User
    signInUser(userSign: UserSignInInput): Token
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  input UserSignInInput {
    email: String!
    password: String!
  }
`;

export default typeDefs;
