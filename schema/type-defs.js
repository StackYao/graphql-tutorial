const {gql} = require('apollo-server');


const typeDefs = gql `
    type User {
        id: String!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User!]
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
    }

    enum Nationality {
        CANADA
        BRAZIL
        AMERICA
        RUSSIA
        ENGLAND
    }
`
   module.exports = {typeDefs}
