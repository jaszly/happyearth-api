const mongoose = require("../database");

const Features = mongoose.model("features", {
  name: {
    type: String,
    required: [true, "Feature is required."],
  },
  description: {
    type: String,
  },
});

module.exports = Features;
