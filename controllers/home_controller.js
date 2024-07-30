const Product = require("../models/product");
const { Op } = require("sequelize");

class HomeController {
  static async index(req, res, next) {
    let dateNow = new Date();
    let uname;
    uname = req.session.user;
    console.log(req.session);
    const jane = await Product.destroy({
      where: {
        id: 1,
      },
    });

    let data = await Product.findAll({
      attributes: ["name", "description"],
      where: { name: { [Op.like]: "%11" } },
    });
    res.render("index", {
      title: "Express",
      dateNow: dateNow,
      uname,
      products: data,
    });
  }
}

module.exports = HomeController;
