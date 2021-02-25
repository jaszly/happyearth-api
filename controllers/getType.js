const Types = require("../models/types");

module.exports = (req, res) => {
  Types.findById(req.params.id)
    .select("name categoryname")
    .then((type) => {
      console.log(type);
      res.send(type);
    })
    .catch((err) => {
      console.log(err);
    });
};
