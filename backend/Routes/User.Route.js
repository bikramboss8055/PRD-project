const express = require("express");
require("dotenv").config();
const { body } = require("express-validator");
const {
  registerUser,
} = require("../Controllers/User-Controllers/RegisterUser.Controller");
const {
  loginUser,
} = require("../Controllers/User-Controllers/LoginUser.Controller");
const {
  getUsers,
} = require("../Controllers/User-Controllers/GetUsers.Controller");
const {
  deleteUser,
} = require("../Controllers/User-Controllers/DeleteUser.Controller");
const { UserAuth } = require("../Middlewares/UserAuth.Middleware");

const userRouter = express.Router();

/** For New User */

userRouter.post(
  "/register",
  [
    body("name", "Please Enter Your Name").not().isEmpty(),
    body("email", "Please Enter A Valid Email Address").isEmail(),
    body("password", "Password Must Be 8 Characters").isLength({ min: 8 }),
  ],
  registerUser
);

/** For Login */

userRouter.post(
  "/login",
  /** Checking Required Fields */
  [
    body("email", "Enter A Valid Email").isEmail().not(),
    body("password", "Enter A Correct Password").not().isEmpty(),
  ],
  loginUser
);

/** For Getting The User Data And This Route Is Only Work For Admin Other People's Can't Use This Route */

userRouter.get("/", UserAuth, getUsers);

/** For Deleting The User Data And This Route Is Only Work For Admin Other People's Can't Use This Route */

userRouter.delete("/delete/:id", UserAuth, deleteUser);

module.exports = {
  userRouter,
};
