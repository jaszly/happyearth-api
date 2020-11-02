const mongoose = require("../database");

const Features = mongoose.model("features", {
  icon: {
    type: String,
    required: [true, "Icon string is required."],
  },
  name: {
    type: String,
    required: [true, "Feature is required."],
  },
  description: {
    type: String,
  },
});

module.exports = Features;
