const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./config");
const path = require("path");

const employeeRoutes = require("./routes/employeeRoutes");
const assetRoutes = require("./routes/assetRoutes");
const assetCategoryRoutes = require("./routes/assetCategoryRoutes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/employees", employeeRoutes);
app.use("/assets", assetRoutes);
app.use("/asset-categories", assetCategoryRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
