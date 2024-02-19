const { Schema, model } = require("../config/db-connection");
const artistSchema = new Schema(
  {
    artist: {
      type: String,
      required: true,
      unique: true,
    },
    contact: {
      type: String,
      required: true,
      unique: false,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: false,
      unique: false,
    },
    website: {
      type: String,
      required: false,
      unique: false,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      // unique: false,
    },
    inquiry: {
      type: String,
      required: false,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

// You can add pre hooks to your schema right here

module.exports = model("Artist", artistSchema);
