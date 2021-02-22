const Types = require("../models/types");

module.exports = (req, res) => {
  Types.find({ categoryname: "Store" })
    .sort({ name: 1 })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
