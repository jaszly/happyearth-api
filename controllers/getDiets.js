const Diets = require("../models/diets");

module.exports = (req, res) => {
  Diets.find({})
    .sort({ name: 1 })
    .then((data) => {
      console.log("works");
      res.send(data);
    })
    .catch((err) => {
      console.log("no works :(");
      res.send(err);
    });
};
