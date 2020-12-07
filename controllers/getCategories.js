const Categories = require("../models/categories");

module.exports = (req, res) => {
  Categories.find({})
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
