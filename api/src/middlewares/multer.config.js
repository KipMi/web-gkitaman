const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/uploads/images');
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(
      null,
      file.fieldname + '_' + Date.now() + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG, PNG and WEBP are supported'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 },
});

module.exports = upload;
