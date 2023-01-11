const { Resistance, User } = require("../models");

module.exports = {
  // create Resistance
  createResistance({ body }, res) {
    Resistance.create(body)
      .then((dbResistanceData) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { resistance: dbResistanceData._id } },
          { new: true }
        )
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "Resistance created but no user with this id!" });
        }
        res.json({ message: "Resistance successfully created!" });
      })
      .catch((err) => res.status(500).json(err));
  },

  // get one Resistance by id
  getResistanceById({ params }, res) {
    Resistance.findOne({ _id: params.id })
      .then((dbResistanceData) => {
        if (!dbResistanceData) {
          return res.status(404).json({ message: "No resistance data found with this id!" });
        }
        res.json(dbResistanceData);
      })
      .catch((err) => res.status(500).json(err));
  },

  // delete resistance data
  deleteResistance({ params }, res) {
    Resistance.findOneAndDelete({ _id: params.id })
      .then((dbResistanceData) => {
        if (!dbResistanceData) {
          res.status(404).json({ message: "No resistance data found with this id!" });
          return;
        }
        // remove resistance on user data
        return User.findOneAndUpdate(
          { resistance: params.id },
          { $pull: { resistance: params.id } },
          { new: true }
        )
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "Resistance deleted but no user with this id!" });
        }
        res.json({ message: "Resistance successfully deleted!" });
      })
      .catch((err) => res.status(500).json(err));
  },
};
