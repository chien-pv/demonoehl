var express = require("express");
var router = express.Router();

/* GET users listing. */
//get
//post
//put
//patch
//delele

router.get("/", function (req, res, next) {
  let q = req.query.q;
  console.log(q);
  res.send("respond with a resource");
});
router.get("/:id", function (req, res, next) {
  let id = req.params.id;
  console.log(id);
  res.redirect("/users");
});

module.exports = router;
