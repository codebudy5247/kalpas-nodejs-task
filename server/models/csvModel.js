import mongoose from "mongoose";

const csvSchema = mongoose.Schema({
  _id: Number,
  name: String,
  address: String,
  age: Number,
});

const Csv = mongoose.model("Csv", csvSchema);

export default Csv;
