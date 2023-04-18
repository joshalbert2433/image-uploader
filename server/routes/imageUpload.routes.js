const express = require("express");
const router = express.Router();
const imageUploadController = require("../controller/imageUpload.controller");
const multerUpload = require("../middleware/multer.middleware");

router.post("/", multerUpload.single("image"), imageUploadController.upload);

module.exports = router;
