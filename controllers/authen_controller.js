const User = require("../models/user");
var bcrypt = require("bcryptjs");

var salt = bcrypt.genSaltSync(10);

class AuthenController {
  static async login(req, res, next) {
    let { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.render("login", { uname: false });
    let match = bcrypt.compareSync(password, user.password); // true
    if (!match) return res.render("login", { uname: false });
    req.session.user = user.email;
    res.redirect("/");

    // data.password = bcrypt.hashSync(data.password, salt);
    // let user = await User.create(data);
  }
}

module.exports = AuthenController;
