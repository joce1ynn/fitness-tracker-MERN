const router = require("express").Router();
const {
  createResistance,
  getAllResistance,
  getResistanceById,
  deleteResistance,
} = require("../../controllers/resistance-controller");

const {
  createCardio,
  getAllCardio,
  getCardioById,
  deleteCardio,
} = require("../../controllers/cardio-controller");

// /api/exercise/cardio
router.route("/cardio").post(createCardio).get(getAllCardio);

// /api/exercise/cardio/:id
router.route("/cardio/:id").get(getCardioById).delete(deleteCardio);

// /api/exercise/resistance
router.route("/resistance").post(createResistance).get(getAllResistance);

// /api/exercise/resistance/:id
router.route("/resistance/:id").get(getResistanceById).delete(deleteResistance);

module.exports = router;
