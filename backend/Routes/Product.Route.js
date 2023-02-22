const express = require("express");
const {
  deleteProduct,
} = require("../Controllers/Product-Controllers/DeleteProduct.Controller");
const {
  getProducts,
} = require("../Controllers/Product-Controllers/GetProduct.Controller");
const {
  postProduct,
} = require("../Controllers/Product-Controllers/PostProduct.Controller");
const {
  updateProduct,
} = require("../Controllers/Product-Controllers/UpdateProduct.Controller");
const { UserAuth } = require("../Middlewares/UserAuth.Middleware");
require("dotenv").config();

const productRouter = express.Router();

/** For Getting All The Products Data */

productRouter.get("/", getProducts);

/** For Getting Data From Product ID */

productRouter.get("/:id", getProducts);

/** For Post A Product */

productRouter.post("/post", UserAuth, postProduct);

/** For Update A Product Using ID*/

productRouter.patch("/update/:id", UserAuth, updateProduct);

/** For Delete A Product Using ID*/

productRouter.delete("/delete/:id", UserAuth, deleteProduct);

module.exports = {
  productRouter,
};
