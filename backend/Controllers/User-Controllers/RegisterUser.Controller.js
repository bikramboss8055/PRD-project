require("dotenv").config();
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { UserModel } = require("../../Models/User.Model");

const registerUser = async (req, res) => {
  try {
    /** Checking All The Fields Are Validate Or Not */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ message: errors.array()[0].msg });
    }
    const {
      name,
      email,
      password,
    } = req.body;

    /** Validate User */
    let ValidatorUser = await UserModel.findOne({ email: email });
    if (ValidatorUser) {
      res.status(401).send({
        message: "Please Enter Another Email This Email Is Already Exist!",
      });
    } else {
      /** Protect The User Password With The Help Of Bcrypt It Convert Your Password To Hash Password Which Is Stored In Our DataBase */
      bcrypt.hash(password, 8, async (err, hash_password) => {
        if (err) {
          console.log(err);
        } else {
          const user = await UserModel.create({
            name,
            email,
            password: hash_password,
          });
          res.send({
            message: "Account created successfully!",
          });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerUser,
};
