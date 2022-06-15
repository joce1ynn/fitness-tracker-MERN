const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ExerciseSchema = new Schema(
  {
    day: { type: Date, default: () => new Date() },
    exercise: [
      {
        type: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        // cardio
        distance: {
          type: Number,
          required: true,
        },
        time: {
          type: Number,
          required: true,
        },
        // resistance
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
        createdAt: {
          type: Date,
          default: Date.now,
          get: (createdAtVal) => dateFormat(createdAtVal),
        },
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Exercise = model("Exercise", ExerciseSchema);

module.exports = Exercise;
