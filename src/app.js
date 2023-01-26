require("dotenv").config();
const express = require("express");
require("./db/conn");
const User = require("./models/usermassage");
const path = require("path");
const app = express();
const hbs = require("hbs");

const port = process.env.PORT || 3000;

// path set
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

//middleware
app.use(express.static(static_path));

app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.use(express.urlencoded({ extended: false }));

//routing
//app.get(path,callback)
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/contact", async (req, res) => {
  try {
    // res.send(req.body);
    const userData = new User(req.body);
    await userData.save();
    res.status(201).render("index");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
