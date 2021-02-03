const Ethics = require("../models/ethics");

module.exports = (req, res) => {
  Ethics.find({})
    .sort({ name: 1 })
    .then((data) => {
      console.log("ethics working");
      res.send(data);
    })
    .catch((err) => {
      console.log("ethics not working");
      res.send(err);
    });
};
