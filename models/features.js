const mongoose = require("../database");

const Features = mongoose.model("features", {
  explanation: {
    type: String,
    required: [true, "Feature is required."],
  },
  icon: {
    type: String,
    required: [true, "Icon string is required."],
  },
});

module.exports = Features;
