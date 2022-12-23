const router = require("express").Router();
const { createUser, login } = require("../../controllers/user-controller");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// put authMiddleware anywhere we need to send a token for verification of user
// /api/user for user signup
router.route("/").post(createUser).put(authMiddleware);

// /api/user/login for user login
router.route("/login").post(login);

module.exports = router;
