import express from "express";
import logger from "morgan";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

var app = express();

dotenv.config();

//Connect to DB
connectDB();

//Middlewares
app.use(logger("dev"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Import Routes
import userRouter from "./routes/userRoutes.js";
app.use("/api/auth", userRouter);

//Test Route
app.get("/", (req, res) => {
  res.send("API is running....");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
