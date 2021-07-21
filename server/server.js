import express from "express";
import logger from "morgan";
import colors from "colors";
import multer from "multer";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import CSV from "./models/csvModel.js";

import csv from "csvtojson";

//Database
import connectDB from "./config/db.js";

var app = express();

//dotenv
dotenv.config();

//Connect to DB
connectDB();

//Middlewares
app.use(logger("dev"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Test Route
app.get("/", (req, res) => {
  res.send("API is running....");
});

const Storage = multer.diskStorage({
  // Destination to store image
  destination: "./uploads",
  // file.fieldname is name of the field (image)
  // path.extname get the uploaded file extension
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: Storage,
  limits: {
    fileSize: 1000000, // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(csv)$/)) {
      return cb(new Error("Please upload a csv file"));
    }
    cb(undefined, true);
  },
});

//Import Routes
//Auth Route
import userRouter from "./routes/userRoutes.js";
app.use("/api/auth", userRouter);

// -> Import CSV File to MongoDB database
import importCsvData from "./importCsvData.js";

app.post("/api/uploadfile", upload.single("uploadfile"), (req, res) => {
  //importCsvData("./uploads" + req.file.filename);
  res.json({
    msg: "File uploaded/import successfully!",
    file: req.file,
  });
  console.log(req.file);
  //console.log(req.file.originalname);
  const filename = req.file.path

  csv().fromFile(filename).then((jsonObj) =>{
        console.log(jsonObj);
  })
      
});


// csv()
//     .fromFile(filePath)
//     .then((jsonObj) => {
//       console.log(jsonObj);

//       CSV.insertMany(jsonObj, (err, res) => {
//         if (err) throw err;
//         console.log("Number of documents inserted: " + res.insertedCount);
//       });

//       fs.unlinkSync(filePath);
//     });
// };

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
