const mongoose = require("../database");

const Types = mongoose.model("types", {
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  categoryname: {
    required: [true, "category name required."],
  },
});

module.exports = Types;
