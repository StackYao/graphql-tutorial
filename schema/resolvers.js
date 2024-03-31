const { UserList, MovieList } = require("../FakeData");
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
  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) =>
          movie.yearOfPublication >= 2015 && movie.yearOfPublication <= 2020
      );
    },
  },
};

module.exports = { resolvers };
