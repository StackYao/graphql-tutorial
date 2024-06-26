const {gql} = require('apollo-server');


const typeDefs = gql `
    type User {
        id: String!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User!]
        favoriteMovies: [Movie]
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    input CreateUserInput{
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = BRAZIL
    }

    input UpdateUsernameInput{
        id: ID!
        newUsername: String!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUsername(input: UpdateUsernameInput!): User!
        deleteUserById(id: ID!): User!
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInThreaters: Boolean!
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
