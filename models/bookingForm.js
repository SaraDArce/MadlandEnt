const { Schema, model } = require("../config/db-connection");
const bookingFormSchema = new Schema(
  {
    artist: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
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

module.exports = model("bookingForm", bookingFormSchema);
