const { uploadImage } = require("../api/imgbb.api");
const path = require("path");
const sharp = require("sharp");
const fs = require("fs");

const upload = async (req, res) => {
	const fileData = req.file;
	const { filename: image } = fileData;
	if (fileData) {
		console.log(fileData);

		const metadata = await sharp(req.file.path).metadata();
		// IMAGE PROCESS TO LESSEN THE IMAGE SIZE
		await sharp(req.file.path)
			.resize(metadata.width, metadata.height)
			.jpeg({ quality: 90 })
			.toFile(path.resolve(req.file.destination, "resized", image));
		fs.unlinkSync(req.file.path);

		// res.send("Single file uploaded successfully");

		res.status(200).json({
			fileName: fileData.filename,
			message: "Single file uploaded successfully",
		});
	} else {
		res.status(400).send("Please upload a valid image");
	}
};

module.exports = {
	upload,
};
