import Axios from "axios";

const ImageUpload = Axios.create({
	// baseURL: import.meta.env.VITE_API_BASE_URL,
	baseURL: "https://image-uploader-backend-2suc.onrender.com/api",
});

const uploadImage = async (imageFile) => {
	console.log(imageFile);
	try {
		const response = await ImageUpload.post("/upload", imageFile);

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

const getImageByFileName = async (fileName) => {
	console.log(fileName);
	try {
		const response = await ImageUpload.get(`/getImage/${fileName}`);

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export { uploadImage, getImageByFileName };
