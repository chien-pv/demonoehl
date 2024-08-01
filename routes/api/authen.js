var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const Sign = "Hello";

const User = require("../../models/user");

router.post("/login", async (req, res, next) => {
  console.log(req.body);
  let { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user)
    return res.status(404).json({ message: "Email or password invalid!" });
  let match = bcrypt.compareSync(password, user.password); // true
  if (!match)
    return res.status(404).json({ message: "Email or password invalid!" });
  var token = jwt.sign({ email }, Sign, { expiresIn: 60 * 60 });
  res.json({ token });
});

module.exports = router;
