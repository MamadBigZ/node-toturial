const express = require("express");
const bodyParse = require("body-parser");
const path = require("path");

const app = express();

const adminData = require("./routes/admin")
const shopRoutes = require("./routes/shop");

const rootDir = require("./utils/path");

app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname , "public")))

app.use("/admin", adminData.routes);
app.use(shopRoutes);

// 404 page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3001);
