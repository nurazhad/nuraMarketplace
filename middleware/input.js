const multer = require("multer");
const path = require("path");
const Storage = multer.diskStorage({
  destination: "./Uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("image");

module.exports = upload;