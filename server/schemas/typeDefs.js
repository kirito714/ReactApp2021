const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    concertCount: Int
    saveConcert: [concertSchema]
  }

  type concertSchema {
    concertId: String
    title: String
    description: String
    date:String
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
    saveConcert(title: String!, description:String!, venue: String!, date: String!): User
    removeConcert(thoughtId: ID!): User
  }
`;

module.exports = typeDefs;
