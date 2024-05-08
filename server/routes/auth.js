const express = require("express");
const authRouter = express.Router();
const verifyToken = require("../middleware/authentication");

const {
  login,
  register,
  updateUser,
  getUserById,
} = require("../controllers/auth.js");

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.put("/edit-profile", verifyToken, updateUser);
authRouter.get("/user-details", verifyToken, getUserById);

module.exports = authRouter;
