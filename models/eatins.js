const mongoose = require("../database");

const Eatins = mongoose.model("eatins", {
  icon: {
    type: String,
    required: [true, "Icon string is required."],
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
  },
});

module.exports = Eatins;
