var express = require("express");

var app = express();

//get binding port from heroku env
const PORT = process.env.PORT || 8080;

app.use(function(req, res, next) {
  if (req.headers["x-forwarded-proto"] === "http") {
    next();
  } else {
    res.redirect("http://" + req.hostname + req.url);
  }
});
app.use(express.static("public"));

app.listen(PORT, function(){
  console.log("Server start up at 8080");
});
