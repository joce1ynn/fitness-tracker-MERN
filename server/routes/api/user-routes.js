const router = require("express").Router();
const {
  createUser,
  getSingleUser,
  login,
  createCardio,
  createResistance,
  getAllCardio,
  getCardioById,
  getAllResistance,
  getResistanceById,
  createGoals,
  getAllGoals,
} = require("../../controllers/user-controller");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// put authMiddleware anywhere we need to send a token for verification of user
// api/user
router.route("/").post(createUser).put(authMiddleware);

// api/users/login
router.route("/login").post(login);

// needs to login to add new exercise
router.route("/me").get(authMiddleware, getSingleUser);

// api/users/cardio
router.route("/cardio").post(createCardio).get(getAllCardio);
router.route("/cardio/:id").get(getCardioById);

// api/users/resistance
router.route("/resistance").post(createResistance).get(getAllResistance);
router.route("/resistance/:id").get(getResistanceById);

// api/users/goal
router.route("/goal").post(createGoals).get(getAllGoals);

module.exports = router;
