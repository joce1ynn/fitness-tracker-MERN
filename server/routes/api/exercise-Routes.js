const router = require("express").Router();
const {
  createResistance,
  getAllResistance,
  getResistanceById,
} = require("../../controllers/resistance-controller");

const {
  createCardio,
  getAllCardio,
  getCardioById,
} = require("../../controllers/cardio-controller");

// api/users/cardio
router.route("/cardio").post(createCardio).get(getAllCardio);
router.route("/cardio/:id").get(getCardioById);

// api/users/resistance
router.route("/resistance").post(createResistance).get(getAllResistance);
router.route("/resistance/:id").get(getResistanceById);

module.exports = router;
