const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log("connect to mongodb");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
