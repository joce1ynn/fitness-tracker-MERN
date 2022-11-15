const { Resistance } = require("../models");

module.exports = {
  // create Resistance
  createResistance({ body }, res) {
    Resistance.create(body)
      .then((dbResistanceData) => res.json(dbResistanceData))
      .catch((err) => res.json(err));
  },

  // get all Resistance
  getAllResistance(req, res) {
    Resistance.find({})
      .sort({ date: "desc" })
      .then((dbResistanceData) => res.json(dbResistanceData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one Resistance by id
  getResistanceById({ params }, res) {
    Resistance.findOne({ _id: params.id })
      .then((dbResistanceData) => {
        if (!dbResistanceData) {
          return res
            .status(404)
            .json({ message: "No resistance data found with this id!" });
        }
        res.json(dbResistanceData);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // delete resistance data
  deleteResistance({ params }, res) {
    Resistance.findOneAndDelete({ _id: params.id })
      .then((dbResistanceData) => {
        if (!dbResistanceData) {
          res
            .status(404)
            .json({ message: "No resistance data found with this id!" });
          return;
        }
        res.json(dbResistanceData);
      })
      .catch((err) => res.json(err));
  },
};
