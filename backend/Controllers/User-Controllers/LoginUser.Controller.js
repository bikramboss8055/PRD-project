require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../../Models/User.Model");
const { validationResult } = require("express-validator");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    /** Checking Required Fields */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).send({ message: errors.array()[0].msg });
    }
    /** We Are Checking Your Mail Is In DataBase Or Not */
    const user = await UserModel.findOne({ email });
    if (user) {
      /** Compare My Hash Password With The Help Of Bcrypt.compare */
      bcrypt.compare(password, user.password, async (err, result) => {
        if (result) {
          /** Generate The Token With Help Of JWT It Gives You One Token When Ever User Is Login */
          const token = jwt.sign({ userID: user._id }, process.env.JWTKey);

          res.send({
            message: "Login Successfully!",
            name: user.name,
            email: user.email,
            token: token,
          });
        } else {
          res
            .status(401)
            .send({ message: "Your Email And Password Is Wrong", err });
        }
      });
    } else {
      res.status(401).send({ message: "Email Not Found" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  loginUser,
};
