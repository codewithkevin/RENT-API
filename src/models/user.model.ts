import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: String,
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
