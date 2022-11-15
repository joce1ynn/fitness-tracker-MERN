const { Cardio } = require("../models");

module.exports = {
  // create cardio
  createCardio({ body }, res) {
    Cardio.create(body)
      .then((dbCardioData) => res.json(dbCardioData))
      .catch((err) => res.json(err));
  },

  // get all Cardios
  getAllCardio(req, res) {
    Cardio.find({})
      .sort({ date: "desc" })
      .then((dbCardioData) => res.json(dbCardioData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one Cardio by id
  getCardioById({ params }, res) {
    Cardio.findOne({ _id: params.id })
      .then((dbCardioData) => {
        if (!dbCardioData) {
          return res
            .status(404)
            .json({ message: "No cardio data found with this id!" });
        }
        res.json(dbCardioData);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // delete cardio data
  deleteCardio({ params }, res) {
    Cardio.findOneAndDelete({ _id: params.id })
      .then((dbCardioData) => {
        if (!dbCardioData) {
          res
            .status(404)
            .json({ message: "No cardio data found with this id!" });
          return;
        }
        res.json(dbCardioData);
      })
      .catch((err) => res.json(err));
  },
};
