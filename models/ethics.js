const mongoose = require("../database");

const Ethics = mongoose.model("ethics", {
  type: {
    type: String,
    required: [true, "name is required."],
  },
  description: {
    type: String,
  },
});

module.exports = Ethics;
