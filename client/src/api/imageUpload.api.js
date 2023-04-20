import Axios from "axios";

const ImageUpload = Axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
});

const uploadImage = async (imageFile) => {
	try {
		const response = await ImageUpload.post("/upload", imageFile);

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

const getImageByFileName = async (fileName) => {
	try {
		const response = await ImageUpload.get(`/getImage/${fileName}`);

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export { uploadImage, getImageByFileName };
