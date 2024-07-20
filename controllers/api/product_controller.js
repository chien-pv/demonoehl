class ProductController {
  static index(req, res) {
    res.send("index");
  }
  static show(req, res) {
    res.send("show");
  }
  static update(req, res) {
    res.send("update");
  }
  static destroy(req, res) {
    res.send("destroy");
  }
  static create(req, res) {
    res.send("create");
  }
}

module.exports = ProductController;
