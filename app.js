var createError = require("http-errors");
var express = require("express");
var bodyParser = require("body-parser");

var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var apiProductRouter = require("./routes/api/products");
var apiAuthenRoutes = require("./routes/api/authen");
var cors = require("cors");
var session = require("express-session");
var jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/demonode23")
  .then(() => console.log("Connected!"));

var sess = {
  secret: "keyboard cat",
  cookie: {},
};

var app = express();
app.use(cors());
app.use(session(sess));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/styles/css",
  express.static(path.join(__dirname, "./node_modules/bootstrap/dist/css"))
);
app.use(
  "/styles/js",
  express.static(path.join(__dirname, "./node_modules/bootstrap/dist/js"))
);
///tách ra 1 file riêng
function checkLogin(req, res, next) {
  let token = req.headers.authorization;
  try {
    var decoded = jwt.verify(token, "Hello");
    console.log(decoded); // bar
    next();
  } catch (error) {
    res.status(401).json({ message: "Bạn không có quyền truy cập" });
  }
}

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/products", checkLogin, apiProductRouter);
app.use("/api", apiAuthenRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
