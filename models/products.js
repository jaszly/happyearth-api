const mongoose = require("../database");

const Products = mongoose.model("products", {
  icon: {
    type: String,
    required: [true, "Icon string is required."],
  },
  name: {
    type: String,
    required: [true, "Product is required."],
  },
  description: {
    type: String,
  },
});

module.exports = Products;
