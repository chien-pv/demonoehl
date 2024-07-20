var express = require("express");
var router = express.Router();
const HomeController = require("../controllers/home_controller");

/* GET home page. */
router.get("/", HomeController.index);

router.get("/about", function (req, res, next) {
  res.render("about");
});

router.get("/login", function (req, res, next) {
  res.render("login", { uname: false });
});

router.post("/login", function (req, res, next) {
  console.log(req.body);
  res.send("Login thành công!!!");
});
module.exports = router;
