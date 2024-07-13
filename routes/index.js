var express = require("express");
var router = express.Router();

//sử dung module database
var mysql = require("mysql");

// create connection to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "demonodehl",
});

/* GET home page. */
router.get("/", function (req, res, next) {
  let dateNow = new Date();
  let uname;

  let products = [
    {
      name: "Iphone 11",
      description:
        "Nhưng làm thế nào để bạn tìm được ikigai của mình? Có nhất thiết phải có sự nghiệp thành công như Jiro Ono – ông chủ nhà hàng Sukiyabashi Jiro, nơi vinh dự được tiếp đón Obama",
    },
    {
      name: "Iphone 12",
      description:
        "Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh",
    },
    {
      name: "Iphone 13",
      description:
        "Ken Mogi mang tới cho độc giả một nhận thức sâu sắc về ikigai, đồng thời hiểu thêm về lịch sử và văn hóa Nhật Bản. Những giá trị của ikigai mà bạn thu nhận từ sách có thể giúp bạn tìm ra ikigai của mình, và quan trọng hơn hết",
    },
  ];
  let sql = "select * from products";
  db.query(sql, function (err, data) {
    console.log(data);
  });
  res.render("index", { title: "Express", dateNow: dateNow, uname, products });
});

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
