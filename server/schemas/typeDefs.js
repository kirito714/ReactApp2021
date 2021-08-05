const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedConcert: [savedConcert]
  }

  type Concert {
    _id: ID
    title: String
    description: String
    venue: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    savedConcert(title: String!, description:String!, venue: String!): User
    removeConcert(thoughtId: ID!): User
  }
`;

module.exports = typeDefs;
