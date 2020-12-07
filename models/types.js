const mongoose = require("../database");

const Types = mongoose.model("types", {
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  about: {
    type: String,
  },
  categories: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
    required: [true, "category is required."],
  },
});

module.exports = Types;
