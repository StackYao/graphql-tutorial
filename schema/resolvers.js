let { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");

// this will be data source that graphql works and process the data
const resolvers = {
  Query: {
    // user resolvers
    users() {
      return UserList;
    },

    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },

    // moview resolvers
    movies: () => {
      return MovieList;
    },

    movie: (parent, args) => {
      const name = args.name;
      return _.find(MovieList, { name });
    },
  },
  // when query User,
  User: {
    // which movie for specific user
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) =>
          movie.yearOfPublication >= 2015 && movie.yearOfPublication <= 2020
      );
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length-1].id;
      user.id = lastId + 1;
      UserList.push(user)
      return user;
    },
    updateUsername: (parent, args) => {
      const {id, newUsername} = args.input
      let newUser
      UserList.forEach((user) => {
        if(user.id === Number(id)) {
          user.username = newUsername
          newUser = user
        }
      })
      return newUser
    },
    deleteUserById: (parent, args) => {
      const id = args.id
      const delUser = _.find(UserList, {"id": Number(id)})
      UserList = UserList.filter(item => item.id !== Number(id))
      return delUser
    }
  }
};

module.exports = { resolvers };
