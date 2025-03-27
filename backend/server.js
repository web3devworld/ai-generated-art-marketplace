const express = require("express");
const multer = require("multer");
const { create } = require("ipfs-http-client");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const ipfs = create({ host: "ipfs.infura.io", port: 5001, protocol: "https" });

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    const fileAdded = await ipfs.add(file.path);
    res.json({ cid: fileAdded.cid.toString() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));