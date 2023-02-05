import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";
const User = mongoose.model("User");
const Quote = mongoose.model("Quote");

const resolvers = {
  //The code is retrieving data from the User and Quote collections in the database, using different parameters.
  Query: {
    users: async () => await User.find({}),
    user: async (_, { _id }) => await User.findOne({ _id }),
    quotes: async () => await Quote.find({}).populate("by", "_id firstName"),
    iquote: async (_, { by }) => await Quote.find({ by }),
    myProfile: async (_, args, { userId }) => {
      if (!userId) {
        throw new Error("You must be logged in");
      }
      return await User.findOne({ _id: userId });
    },
    quote: async (_, { _id }) => await Quote.findOne({ _id }),
  },
  //This code is finding all quotes associated with a given user's ID.
  User: {
    quotes: async (ur) => await Quote.find({ by: ur._id }),
  },
  Mutation: {
    //This code is creating a new user by checking if the email already exists and then hashing the password before saving the user.
    signupUser: async (_, { userNew }) => {
      const user = await User.findOne({ email: userNew.email });
      if (user) {
        throw new Error("User already exists with that email");
      }
      const hashedPassword = await bcrypt.hash(userNew.password, 12);

      const newUser = new User({
        ...userNew,
        password: hashedPassword,
      });

      return await newUser.save();
    },
    //The code is checking if the user exists, comparing the password and creating a token if the user is valid.
    signInUser: async (_, { userSign }) => {
      const user = await User.findOne({ email: userSign.email });
      if (!user) {
        throw new Error("User doesn't exist with that email");
      }
      const doMatch = await bcrypt.compare(userSign.password, user.password);
      if (!doMatch) {
        throw new Error("Email or Password is invalid");
      }
      const token = jwt.sign({ userId: user._id }, JWT_SECRET);
      return { token };
    },
    //This code creates a new quote with the given name and saves it to the database, returning a success message if successful.
    createQuote: async (_, { name }, { userId }) => {
      if (!userId) {
        throw new Error("You must be logged in");
      }
      const newQuote = new Quote({
        name,
        by: userId,
      });
      await newQuote.save();
      return "Quote saved successfully";
    },
    //This code is updating a quote in the database with the given name and returning a success message.
    editQuote: async (_, { updateQuote }, { userId }) => {
      try {
        if (!userId) {
          throw new Error("You must be logged in");
        }
        const updatedQuote = await Quote.findByIdAndUpdate(updateQuote._id, {
          name: updateQuote.name,
        });
        return `Quote updated Successfully!!!`;
      } catch (error) {
        throw error;
      }
    },
    //This code is deleting a quote from the database based on its _id, and requires the user to be logged in to do so.
    deleteQuote: async (_, { _id }, { userId }) => {
      try {
        if (!userId) {
          throw new Error("You must be logged in");
        }
        const deletedQuote = await Quote.findByIdAndDelete(_id);
        return "Quote deleted Successfully";
      } catch (error) {
        throw Err;
      }
    },
  },
};

export default resolvers;
