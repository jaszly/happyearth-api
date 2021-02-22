const Eatins = require("../models/eatins");

module.exports = (req, res) => {
  Eatins.find({})
    .sort({ explanation: 1 })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
