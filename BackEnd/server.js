//importing modules
const express = require("express");
const cors = require("cors");
const connection = require("./Database/db.js");
const routesUrls = require("./routes/route");
const bodyParser = require("body-parser");
const app = express();

// mongodb connection
connection();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/app", routesUrls);

//port setting
if (process.env.NODE_ENV == "production") {
  const path = require("path");
  app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "../frontend", "build")));
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
  });
}

const PORT = 3008;
app.listen(PORT, () => {
  console.log(`server running on port:${PORT}`);
});
