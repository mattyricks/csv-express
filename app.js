var createError = require("http-errors");
var express = require("express");
var cors = require("cors");
var path = require("path");

var testAPIRouter = require("./routes/testAPI");

var PORT = 9000;

var app = express();

app.use(cors());
app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/", testAPIRouter);

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
  res.json();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
