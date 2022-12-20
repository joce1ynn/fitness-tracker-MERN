const router = require("express").Router();
const path = require("path");

const userRoutes = require("./user-routes");
const exerciseRoutes = require("./exercise-routes");

router.use("/user", userRoutes);
router.use("/exercise", exerciseRoutes);

// connect with react router
// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});

module.exports = router;
