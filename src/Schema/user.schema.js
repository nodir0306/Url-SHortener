import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, 
    minlength: 3,
    maxlength: 30 
  },
  password: {
    type: String,
    required: true,
    minlength: 8 
  },
  userUrls: {
    type: [String], 
    default: [] 
  }
}, {
  collection: "users",
  timestamps: true 
});


userSchema.index({ username: 1 });

export const User = model("User", userSchema);
