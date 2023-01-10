import { quotes, users } from "./fakedb.js";
import { randomBytes } from "crypto";
import mongoose from "mongoose";
const User = mongoose.model("User");
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";
const resolvers = {
  Query: {
    users: () => {
      return users;
    },
    quotes: () => {
      return quotes;
    },
    user: (_, args) => {
      return users.find((user) => user._id == args._id);
    },
    iquote: (_, args) => {
      return quotes.filter((quote) => quote.by == args.by);
    },
  },
  User: {
    quotes: (ur) => {
      return quotes.filter((quote) => quote.by == ur._id);
    },
  },
  Mutation: {
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
  },
};

export default resolvers;
