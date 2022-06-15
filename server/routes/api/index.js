const router = require("express").Router();
const userRoutes = require("./user-routes");
const exerciseRoutes = require("./exercise-routes");

router.use("/users", userRoutes);
router.use("/exercises", exerciseRoutes);

module.exports = router;
