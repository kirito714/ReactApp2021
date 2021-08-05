const { AuthenticationError } = require("apollo-server-express");
const { User, Concert } = require("../models");
const { signToken } = require("../utils/auth");


// query for me mutations
const resolvers = {
  Query: {
    // fineOne me with context._id
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    // addUser create() and return token along with the user
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // Login to check if isCorrectPassword() or throw a auth err no user found.....
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    // removeConcert by concertId using the findOneAndDelete() then await and update
    removeConcert: async (parent, { concertId }, context) => {
      if (context.user) {
        const concert = await Concert.findOneAndDelete({
          _id: concertId,
        });

        await User.findOneAndUpdate({ _id: context.user._id });

        return concert;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
