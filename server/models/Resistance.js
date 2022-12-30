const { Schema, model } = require("mongoose");

const ResistanceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    sets: {
      type: Number,
      required: true,
    },
    reps: {
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

const Resistance = model("Resistance", ResistanceSchema);

module.exports = Resistance;
