const UserList = [
    {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "CANADA",
        friends: [
            {
                id: 2,
                name: "Sarah",
                username: "sarah",
                age: 30,
                nationality: "AMERICA",
            },
            {
                id: 4,
                name: "Peter",
                username: "peter",
                age: 23,
                nationality: "RUSSIA",
            },
        ]
    },
    {
        id: 2,
        name: "Sarah",
        username: "sarah",
        age: 30,
        nationality: "AMERICA",
    },
    {
        id: 3,
        name: "Jack",
        username: "jack",
        age: 33,
        nationality: "BRAZIL",
        friends: [
            {
                id: 4,
                name: "Peter",
                username: "peter",
                age: 23,
                nationality: "RUSSIA",
            },
            {
                id: 5,
                name: "Mike",
                username: "mike",
                age: 25,
                nationality: "ENGLAND",
            }
        ]
    },
    {
        id: 4,
        name: "Peter",
        username: "peter",
        age: 23,
        nationality: "RUSSIA",
    },
    {
        id: 5,
        name: "Mike",
        username: "mike",
        age: 25,
        nationality: "ENGLAND",
    }
]

const MovieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        yearOfPublication: 2019,
        isInThreaters: true,
    },
    {
        id: 2,
        name: "Kill Bill",
        yearOfPublication: 2009,
        isInThreaters: true,
    },
    {
        id: 3,
        name: "Interstella",
        yearOfPublication: 2017,
        isInThreaters: true,
    },
    {
        id: 4,
        name: "Thompson Family",
        yearOfPublication: 2021,
        isInThreaters: false,
    },
]

module.exports = {UserList, MovieList}