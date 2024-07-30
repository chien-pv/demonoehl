var express = require("express");
var router = express.Router();
const HomeController = require("../controllers/home_controller");
const AuthenController = require("../controllers/authen_controller");

function checkLogin(req, res, next) {
  let curentUser = req.session.user;
  if (!curentUser) return res.redirect("/login");
  next();
}
/* GET home page. */
router.get("/", checkLogin, HomeController.index);

router.get("/about", function (req, res, next) {
  res.render("about");
});

router.get("/login", function (req, res, next) {
  res.render("login", { uname: false });
});

router.post("/login", AuthenController.login);
module.exports = router;
