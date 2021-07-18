const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, path.resolve(__dirname, '../public/img'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}.${file.originalname}`);
  }
});

const upload = multer({ storage });
const uploadImgsMW = upload.array('heroImg');
module.exports = uploadImgsMW;
