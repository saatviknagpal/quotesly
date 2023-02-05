// Import mongoose
import mongoose from "mongoose";

// Create user schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // Data type
    required: true,
    // Required field
  },
  lastName: {
    type: String,
    // Data type
    required: true,
    // Required field
  },
  email: {
    type: String,
    // Data type
    required: true,
    // Required field
  },
  password: {
    type: String,
    // Data type
    required: true,
    // Required field
  },
});

// Create model from schema
mongoose.model("User", userSchema);
