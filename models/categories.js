const mongoose = require("../database");
//categories for types of spots

const Categories = mongoose.model("categories", {
  displayTitle: {
    type: String,
    required: [true, "Name is required."],
  },
  linkTitle: {
    type: String,
    required: [true, "Name is required."],
  },
  about: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = Categories;
