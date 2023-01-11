const { Cardio, User } = require("../models");

module.exports = {
  // create cardio
  createCardio({ body }, res) {
    Cardio.create(body)
      .then((dbCardioData) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { cardio: dbCardioData._id } },
          { new: true }
        )
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "Cardio created but no user with this id!" });
        }
        res.json({ message: "Cardio successfully created!" });
      })
      .catch((err) => res.status(500).json(err));
  },

  // get one Cardio by id
  getCardioById({ params }, res) {
    Cardio.findOne({ _id: params.id })
      .then((dbCardioData) => {
        if (!dbCardioData) {
          return res.status(404).json({ message: "No cardio data found with this id!" });
        }
        res.json(dbCardioData);
      })
      .catch((err) => res.status(500).json(err));
  },

  // delete cardio data
  deleteCardio({ params }, res) {
    Cardio.findOneAndDelete({ _id: params.id })
      .then((dbCardioData) => {
        if (!dbCardioData) {
          res.status(404).json({ message: "No cardio data found with this id!" })
        }
        // remove cardio on user data
        return User.findOneAndUpdate(
          { cardio: params.id },
          { $pull: { cardio: params.id } },
          { new: true }
        )
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "Cardio deleted but no user with this id!" });
        }
        res.json({ message: "Cardio successfully deleted!" });
      })
      .catch((err) => res.status(500).json(err));
  },
};
