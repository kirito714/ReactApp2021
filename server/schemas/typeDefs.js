const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedConcert:[savedConcert]
  }

  type Concert {
    _id: ID
    title: String
    description: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addConcert(title: String!,description:String!): User
    removeConcert(thoughtId: ID!): User
   
  }
`;

module.exports = typeDefs;
