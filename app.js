const mongoose = require("mongoose");
const express = require("express");
const helmet = require("helmet");
var morgan = require("morgan");
const foods = require("./router/foods");
const loggerMiddleware = require("./Middleware/loggerMiddleware");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(loggerMiddleware);

const port = process.env.PORT || 3000;

// Fix strictQuery deprecation warning
mongoose.set("strictQuery", false);

/****************************************************/
// MongoDB Connection - ضع الـ connection string بتاعك هنا
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => console.error("❌ Could not connect to MongoDB:", err));
/****************************************************/

app.use("/api/foods", foods);

/****************************************************/
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
