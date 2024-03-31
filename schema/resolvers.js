const {UserList} = require('../FakeData')
const _ = require('lodash')

// this will be data source that graphql works
const resolvers = {
    Query: {
        users() {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id
            const user = _.find(UserList, {id: Number(id)})
            return user
        }

    }
}

module.exports = {resolvers}