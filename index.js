const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json())
const db = require("./config/db");
db();

app.use("/college", require("./routes/CollegeRoutes"));

app.get("/", (req, res) => {
  res.send("hey ");
});
const PORT= process.env.PORT || 4000
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'))
  })

app.listen(PORT, () => console.log("APP RUNNING"));
