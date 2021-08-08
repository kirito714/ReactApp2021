const { AuthenticationError } = require("apollo-server-express");
const { User, concertSchema } = require("../models");
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
    saveConcert: async (parent, { title, description, venue, date }, context) => {
      if (context.user) {
        //add the concert to saved concert
        //then push the concert id into our savedConcert
        const savedConcertArray = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              saveConcert: { title, description, venue, date},
            },
          },
          { new: true, runValidators: true }
        );

        return savedConcertArray;
      }

      throw new AuthenticationError("You need to be logged in to save a Concert");
    },
     // removeConcert by concertId using the findOneAndDelete() then await and update
     removeConcert: async (parent, { concertId }, context) => {
      if (context.user) {
        const savedConcertArray = await User.findOneAndDelete(
          {_id: context.user._id,},
          {
            $pull: {
              saveConcert: {concertId}
            }
          },
          { new: true, runValidators: true }

          );
          return savedConcertArray;
      }

      throw new AuthenticationError("Could not delete event");
    },
  },
};

module.exports = resolvers;
