const Ethics = require("../models/ethics");

module.exports = (req, res) => {
  Ethics.find({})
    .sort({ type: 1 })
    .then((data) => {
      console.log("ethics working");
      res.send(data);
    })
    .catch((err) => {
      console.log("ethics not working");
      res.send(err);
    });
};
