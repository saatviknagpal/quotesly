import { gql } from "apollo-server";
const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID!): User
    quotes: [QuoteWithName]
    iquote(by: ID!): [Quote]
  }
  type QuoteWithName {
    name: String
    by: IdName
  }

  type IdName {
    _id: String
    firstName: String
  }
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    quotes: [Quote]
  }
  type Quote {
    name: String!
    by: ID!
  }
  type Token {
    token: String!
  }
  type Mutation {
    signupUser(userNew: UserInput!): User
    signInUser(userSign: UserSigninInput!): Token
    createQuote(name: String!): String
    editQuote(updateQuote: UserUpdateInput!): String
    deleteQuote(_id: ID!): String
  }
  input UserUpdateInput {
    _id: ID!
    name: String!
  }
  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  input UserSigninInput {
    email: String!
    password: String!
  }
`;
export default typeDefs;
