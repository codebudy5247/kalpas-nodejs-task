import express from "express";
const router = express.Router();
import CSV from "../models/csvModel.js";
import Auth from "../Middleware/auth.js"

//Get All CSV Data
//GET/api/csvData @access Private
router.get("/", Auth,async (req, res) => {
  try {
    const csvData = await CSV.find();
    res.json(csvData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//Update CSV Data
//PUT/api/csvData/:id @access Private
router.put("/:id",Auth, async(req, res) => {
  const { _id, name, address, age } = req.body;

  // Build csv data object
  const dataFields = {};
  if (_id) dataFields._id = _id;
  if (name) dataFields.name = name;
  if (address) dataFields.address = address;
  if (age) dataFields.age = age;

  try {
    let csvdata = await CSV.findById(req.params.id);

    if (!csvdata) return res.status(404).json({ msg: "Data not found" });

    csvdata = await CSV.findByIdAndUpdate(
      req.params.id,
      { $set: dataFields },
      { new: true },
      //{useFindAndModify: false}
    );

    res.json(csvdata);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//Delete CSV Data
//DELETE/api/csvData/:id @access Private
router.delete("/:id",Auth, async (req, res) => {
  try {
    const csv = await CSV.findById(req.params.id);

    if (!csv) return res.status(404).json({ msg: "Data not found" });

    await CSV.findByIdAndRemove(req.params.id);

    res.json({ msg: "CSV DATA REMOVED" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

export default router;
