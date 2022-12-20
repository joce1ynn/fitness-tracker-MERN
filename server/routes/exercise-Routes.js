const router = require("express").Router();
const {
  createResistance,
  getAllResistance,
  getResistanceById,
  deleteResistance,
} = require("../controllers/resistance-controller");

const {
  createCardio,
  getAllCardio,
  getCardioById,
  deleteCardio,
} = require("../controllers/cardio-controller");

// /exercise/cardio
router.route("/cardio").post(createCardio).get(getAllCardio);

// /exercise/cardio/:id
router.route("/cardio/:id").get(getCardioById).delete(deleteCardio);

// /exercise/resistance
router.route("/resistance").post(createResistance).get(getAllResistance);

// /exercise/resistance/:id
router.route("/resistance/:id").get(getResistanceById).delete(deleteResistance);

module.exports = router;
