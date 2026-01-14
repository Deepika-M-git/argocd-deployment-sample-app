const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Backend + MongoDB 🚀" });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});

