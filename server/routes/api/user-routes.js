const router = require("express").Router();
const {
  createUser,
  login,
} = require("../../controllers/user-controller");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// put authMiddleware anywhere we need to send a token for verification of user
// api/user
router.route("/").post(createUser).put(authMiddleware);

// api/user/login
router.route("/login").post(login);

module.exports = router;
