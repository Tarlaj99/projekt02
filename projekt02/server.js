const ex = require("express");
const app = ex();

app.set("view engine", "ejs");
app.use(ex.urlencoded({ extended: false }));

let msg = "";

app.get("/", (req, res) => {
  res.render("index", { msg });
});

app.get("/a", (req, res) => {
  res.send("GET /a");
});

app.post("/send", (req, res) => {
  msg = req.body.txt || "";
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});