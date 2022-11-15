const router = require("express").Router();
const {
  createUser,
  getSingleUser,
  login,
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

module.exports = router;
