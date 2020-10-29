const Features = require("../models/features");

module.exports = (req, res) => {
  Features.find({})
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
