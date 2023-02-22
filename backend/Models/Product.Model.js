const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ url: { type: String, required: true } }],
    description: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ProductModel = mongoose.model("product", productSchema);

module.exports = {
  ProductModel,
};
