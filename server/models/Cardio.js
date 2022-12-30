const { Schema, model } = require("mongoose");

const CardioSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Cardio = model("Cardio", CardioSchema);

module.exports = Cardio;
