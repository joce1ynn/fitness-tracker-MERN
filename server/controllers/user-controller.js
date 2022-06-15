const { User, Cardio, Resistance, Goals } = require("../models");
const { signToken } = require("../utils/auth");

module.exports = {
  // get a single user by either their id or their username
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [
        { _id: user ? user._id : params.id },
        { username: params.username },
      ],
    });

    if (!foundUser) {
      return res
        .status(400)
        .json({ message: "Cannot find a user with this id!" });
    }

    res.json(foundUser);
  },

  // create a user, sign a token, and send it back (to src/components/SignUpForm.js)
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: "Something is wrong!" });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  // login a user, sign a token, and send it back (to src/components/LoginForm.js)
  async login({ body }, res) {
    const user = await User.findOne({
      $or: [{ username: body.username }, { email: body.email }],
    });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: "Wrong password!" });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

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

  // create goal
  createGoals({ body }, res) {
    Goals.create(body)
      .then((dbGoalData) => res.json(dbGoalData))
      .catch((err) => res.json(err));
  },

  // get all Goal
  getAllGoals(req, res) {
    Goals.find({})
      .sort({ createdAt: "desc" })
      .then((dbGoalData) => res.json(dbGoalData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
};
