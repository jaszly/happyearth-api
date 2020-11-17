const mongoose = require("../database");

const Types = mongoose.model("types", {
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  about: {
    type: String,
  },
});

module.exports = Types;
