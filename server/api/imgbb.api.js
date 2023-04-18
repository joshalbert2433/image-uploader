const axios = require("axios");

const Imgbb = axios.create({
	baseURL: "https://api.imgbb.com/1/",
	// baseURL: "https://jlpt-vocab-api.vercel.app/api",
});

const uploadImage = async () => {
	try {
		const response = await Imgbb.post(
			`/upload?key=${process.env.IMGBB_KEY}&expiration=3600`,
			{}
		);

		console.log(response);
	} catch (error) {
		// console.log(error);
	}
};

module.exports = {
	uploadImage,
};
