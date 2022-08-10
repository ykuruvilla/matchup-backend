const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    postcode: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    tennis: {
      type: Boolean,
      required: true,
    },
    squash: {
      type: Boolean,
      required: true,
    },
    badminton: {
      type: Boolean,
      required: true,
    },
    tableTennis: {
      type: Boolean,
      required: true,
    },
    bowling: {
      type: Boolean,
      required: true,
    },
    golf: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
