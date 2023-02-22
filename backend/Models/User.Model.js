const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verificationExpires: {
      type: Date,
      default: () => new Date(+new Date() + 10 * 60 * 1000),
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
userSchema.index(
  { verificationExpires: 1 },
  {
    expireAfterSeconds: 0,
    partialFilterExpression: { isVerified: false },
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
