const multer = require("multer");
const path = require("path");

const storageEngine = multer.diskStorage({
	destination: "./static/images",
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}--${file.originalname}`);
	},
});

const upload = multer({
	storage: storageEngine,
	limits: { fileSize: 10000000 },
	fileFilter: (req, file, cb) => {
		checkFileType(file, cb);
	},
});

const checkFileType = function (file, cb) {
	//Allowed file extensions
	const fileTypes = /jpeg|jpg|png|gif|svg/; //check extension names

	const extName = fileTypes.test(
		path.extname(file.originalname).toLowerCase()
	);

	const mimeType = fileTypes.test(file.mimetype);

	if (mimeType && extName) {
		return cb(null, true);
	} else {
		cb("Invalid file format");
	}
};

module.exports = upload;
