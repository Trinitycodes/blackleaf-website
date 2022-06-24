const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    accounts: { type: Array },
  },
  { timestamps: true },
  { collection: "user-data" }
);

const model = mongoose.model("UserData", User);

module.exports = model;
