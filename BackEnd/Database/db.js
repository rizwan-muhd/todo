const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { JWT_SECRET } = require("../config/keys");

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
const connection = () => {
  mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("Database connected succesfully");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });
  mongoose.connection.on("error", () => {
    console.log("error in connection", error.message);
  });
};

module.exports = connection;
