import path from "path";
import express from "express";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  
});



const upload = multer({
  storage
  
});

router.post("/", upload.single("csv"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;