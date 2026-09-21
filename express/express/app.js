const express = require("express");
const bodyParse = require("body-parser");
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParse.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// 404 page
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3001);
