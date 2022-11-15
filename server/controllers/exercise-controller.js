const { Exercise } = require("../models");

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
      .sort({ createdAt: "desc" })
      .then((dbCardioData) => res.json(dbCardioData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one Cardio by id
  getCardioById({ params }, res) {
    Cardio.findOne({ _id: params.id })
      .then((dbCardioData) => res.json(dbCardioData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  // create Resistance
  createResistance({ body }, res) {
    Resistance.create(body)
      .then((dbResistanceData) => res.json(dbResistanceData))
      .catch((err) => res.json(err));
  },

  // get all Resistance
  getAllResistance(req, res) {
    Resistance.find({})
      .sort({ createdAt: "desc" })
      .then((dbResistanceData) => res.json(dbResistanceData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one Resistance by id
  getResistanceById({ params }, res) {
    Resistance.findOne({ _id: params.id })
      .then((dbResistanceData) => res.json(dbResistanceData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
};
