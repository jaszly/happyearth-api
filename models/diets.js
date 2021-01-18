const mongoose = require("../database");

const Diets = mongoose.model("diets", {
  name: {
    type: String,
    required: [true, "name is required."],
  },
  description: {
    type: String,
  },
});

module.exports = Diets;
