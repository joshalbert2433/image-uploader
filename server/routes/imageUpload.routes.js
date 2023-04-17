const express = require("express");
const router = express.Router();
const imageUploadController = require("../controller/imageUpload.controller");

router.get("/", imageUploadController.upload);

module.exports = router;
