const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // checking if user has provided all the details
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "please provide name, email and password",
      });
    }
    // checking for duplicate email
    const isDuplicate = await User.findOne({ email: email });
    if (isDuplicate) {

      return res
        .status(400)
        .json({ success: false, message: "Email Already Exists" });
    }

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // creating tempUser with hashed password
    const tempUser = { name, email, password: hashedPassword };

    // creating new user
    const user = await User.create({ ...tempUser });
    return res
      .status(200)
      .json({ message: "User Created Successfully", user, success: true });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const login = async (req, res) => {
  try {
    // getting email and password
    const { email, password } = req.body;

    // check if the user exists
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    // compare passwords throw error if not matching
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    // generate a token if details are correct
    const token = jwt.sign({ id: user._id }, "jwtsecretkey");
    return res.status(200).json({
      success: true,
      message: "Login Successful",
      name: user.name,
      user_id: user._id,
      token,
    });
  } catch (error) {
    return res.json({ error });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.id).select("-password");
    if (!user) {
      return res.json({
        message: `No User Found With Username ${req.params.id}`,
      });
    }
    return res.json({ user });
  } catch (error) {
    return res.json({ error });
  }
};

const updateUser = async (req, res) => {
  try {
    let user = await User.findOneAndUpdate({ _id: req.id }, req.body, {
      new: true,
    });
    if (!user) {
      return res.json({
        message: `No User Found With Username ${req.params.id}`,
      });
    }
    return res.json({ user });
  } catch (error) {
    return res.send({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  updateUser,
  getUserById
};
