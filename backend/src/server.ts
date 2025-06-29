import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = () => {
  mongoose.connect(process.env.DB_URL!);
};

const app = express();

app.use(cors());
app.get("/waitlist", (req, res) => {
  const { name, email } = req.body;

  res.send("Hello, world!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  try {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
  } catch (e) {
    console.error(e);
  }
});

// const waitlistSchema = new
