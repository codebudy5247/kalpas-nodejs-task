import mongoose from "mongoose";

const csvSchema = mongoose.Schema(
  {
    
  }
);

const Csv = mongoose.model("Csv", csvSchema);

export default Csv;
