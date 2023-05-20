import multer from "multer";
import path from "path";

let uploadedFileName = "";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../images");
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + path.extname(file.originalname);
    uploadedFileName = fileName; // Store the filename in the variable
    console.log(fileName);
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

export { upload, uploadedFileName };
