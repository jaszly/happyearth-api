const mongoose = require("../database");

const Products = mongoose.model("products", {
  name: {
    type: String,
    required: [true, "Product is required."],
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
});

module.exports = Products;
