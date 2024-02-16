const { Schema, model } = require("../config/db-connection");
const artistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    // email: {
    //   type: email,
    //   required: true,
    // },
    company: {
      type: String,
      required: false,
      unique: false,
    },
    link: {
      type: String,
      required: false,
      unique: false,
    },
    password: {
      type: String,
      required: true,
      unique: false,
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
