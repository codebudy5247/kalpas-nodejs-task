import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs"

import connectDB from "./config/db.js";
import CSV from "./models/csvModel.js";

import csv from "csvtojson";

dotenv.config();
//Connect to DB
//connectDB();

const importCsvData = function(filepath) {
  csv()
    .fromFile(filePath)
    .then((jsonObj) => {
      console.log(jsonObj);

      CSV.insertMany(jsonObj, (err, res) => {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
      });

      fs.unlinkSync(filePath);
    });
};

export default importCsvData;
