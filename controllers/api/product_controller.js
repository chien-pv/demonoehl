const Product = require("../../models/product");
class ProductController {
  static async index(req, res) {
    let { limit, page } = req.query;
    limit = parseInt(limit ? limit : 1);
    page = parseInt(page ? page : 1);
    let offset = (page - 1) * limit;
    try {
      let products = await Product.findAll({ offset, limit });
      res
        .status(200)
        .json({ message: "Lay data thanh cong!!", data: products });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async show(req, res) {
    try {
      let id = req.params.id;
      let product = await Product.findByPk(id);
      if (product) {
        res.status(200).json({
          message: "Succes!!",
          data: product,
        });
      } else {
        res.status(404).json({ message: "Not found!!!" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message, error });
    }
  }

  static async destroy(req, res) {
    try {
      let id = req.params.id;
      let product = await Product.destroy({
        where: {
          id: id,
        },
      });

      res.status(200).json({
        message: "Succes!!",
      });
    } catch (error) {
      res.status(500).json({ message: error.message, error });
    }
  }
  static async create(req, res) {
    try {
      let paramsData = req.body;
      const product = await Product.create(paramsData);
      res.status(200).json({
        message: "Thanh cong",
        data: product,
      });
    } catch (error) {
      res.status(500).json({ message: error.message, error });
    }
  }
  static async update(req, res) {
    try {
      let id = req.params.id;
      let paramsData = req.body;
      let product = await Product.update(paramsData, {
        where: {
          id: id,
        },
      });
      res.status(200).json({
        message: "Thanh cong",
        data: product,
      });
    } catch (error) {
      res.status(500).json({ message: error.message, error });
    }
  }
}

module.exports = ProductController;
