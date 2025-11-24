const express = require("express");

express.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

let msg = "";

express.get("/", (req, res) => {
  res.render("index", { msg });
});

express.get("/a", (req, res) => {
  res.render("page", { text: "GET /a" });
});

express.post("/send", (req, res) => {
  msg = req.body.txt || "";
  res.redirect("/");
});

express.listen(3000);
