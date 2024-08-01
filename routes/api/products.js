var express = require("express");
var router = express.Router();

const ProductController = require("../../controllers/api/product_controller");

router.get("/", ProductController.index); // /products
router.get("/:id", ProductController.show);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.destroy);
router.post("/", ProductController.create);

module.exports = router;
