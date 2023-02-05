// Import mongoose module
import mongoose from "mongoose";

// Create a new schema for quotes
const quotesSchema = new mongoose.Schema({
  // Quote name is required
  name: {
    type: String,
    required: true,
  },

  // Reference to the user who created the quote
  by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

// Create a model based on the schema
mongoose.model("Quote", quotesSchema);
