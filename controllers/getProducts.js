const Products = require("../models/products");

module.exports = (req, res) => {
  Products.find({})
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
