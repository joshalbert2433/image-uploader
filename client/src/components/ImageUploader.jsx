import React, { useState, useEffect, useCallback } from "react";
import DefaultImage from "../assets/image.svg";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../api/imageUpload.api";
import { Toaster, toast } from "react-hot-toast";
import { useDropzone } from "react-dropzone";
import ImageLoading from "./ImageLoading";

function ImageUploader() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [progress, setProgress] = useState(0);
	const [imageData, setImageData] = useState("");

	const onDrop = useCallback(async (acceptedFiles) => {
		const imageFile = acceptedFiles[0];
		const formData = new FormData();
		setIsLoading(true);
		formData.append("image", imageFile);
		const result = await uploadImage(formData);
		if (!result) {
			toast.error("Invalid file format");
			setIsLoading(false);
			return;
		}
		if (result) {
			setTimeout(() => {
				navigate("/result", { state: { image: result.fileName } });
			}, 300);
		}
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
	});

	const uploadImageHandler = async (e) => {
		e.preventDefault();
		const imageFile = e.target.files[0];
		const formData = new FormData();
		setIsLoading(true);
		uploadImage();
		formData.append("image", imageFile);

		const result = await uploadImage(formData);

		if (!result) {
			toast.error("Invalid file format");
			setIsLoading(false);
			return;
		}

		if (result) {
			setTimeout(() => {
				navigate("/result", { state: { image: result.fileName } });
			}, 300);
		}
	};

	return (
		<>
			{!isLoading ? (
				<div className="min-w-[400px] py-4 min-h-[470px] flex flex-col bg-[#FFFFFF] justify-evenly items-center rounded-xl shadow-[0px_4px_12px_0_rgba(0,0,0,0.10)]">
					<h2 className="text-[18px]">Upload your image</h2>
					<p className="text-[10px] text-[#828282]">
						File should be Jpeg, Png...
					</p>
					<div {...getRootProps()}>
						<input {...getInputProps()} />

						<div
							className={`${
								isDragActive && "bg-blue-100"
							} cursor-pointer border_dotted justify-evenly w-[340px] h-[220px] flex flex-col items-center bg-[#F6F8FB]`}
						>
							<img
								src={DefaultImage}
								alt="default image"
								className="w-[115px] h-[90px]"
							/>
							<p className="text-[12px] text-[#BDBDBD]">
								Drag & Drop your image here
							</p>
						</div>
					</div>

					<p className="text-[#828282] text-[12px]">Or</p>
					<form method="POST" encType="multipart/form-data">
						<div>
							<label
								htmlFor="inputImage"
								className="font-['Noto_Sans'] leading-[16.34px] font-[500] size-[12px] bg-[#2F80ED] py-2 px-4 rounded-lg text-white hover:opacity-90 hover:cursor-pointer"
							>
								{!isLoading ? "Choose a file" : "Uploading..."}
							</label>
							<input
								type="file"
								name="inputImage"
								id="inputImage"
								onChange={uploadImageHandler}
								className="hidden"
								disabled={isLoading ? true : false}
								accept="image/*"
							/>
						</div>
					</form>
				</div>
			) : (
				<ImageLoading
					isLoading={isLoading}
					progress={progress}
					setProgress={setProgress}
				/>
			)}
			<Toaster />
		</>
	);
}

export default ImageUploader;
