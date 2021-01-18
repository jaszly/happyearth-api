const mongoose = require("../database");

const Spots = mongoose.model("spots", {
  images: {
    type: [String],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  spotters: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  description: {
    type: String,
    required: true,
  },
  types: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "types",
  },

  features: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "features",
    },
  ],
  toggleProducts: {
    type: Boolean,
    default: false,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
  ],

  toggleEatins: {
    type: Boolean,
    default: false,
  },
  eatins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "eatins",
    },
  ],

  toggleTakeaways: {
    type: Boolean,
    default: false,
  },
  takeaways: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "takeaways",
    },
  ],

  toggleDiets: {
    type: Boolean,
    default: false,
  },
  diets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "diets",
    },
  ],

  toggleEthics: {
    type: Boolean,
    default: false,
  },
  ethics: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ethics",
    },
  ],

  city: {
    type: String,
    required: [true, "City is required."],
  },
  country: {
    type: String,
    required: [true, "Country is required."],
  },
  center: {
    lng: {
      type: Number,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
  },
});

module.exports = Spots;
