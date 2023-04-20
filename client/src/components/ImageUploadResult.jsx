import React, { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { getImageByFileName, uploadImage } from "../api/imageUpload.api";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";

function ImageUploadResult() {
	const location = useLocation();
	const [imageData, setImageData] = useState("");
	const { image } = location.state;

	const getImageData = async () => {
		const imageResult = await getImageByFileName(image);
		setImageData(imageResult);
	};

	useEffect(() => {
		getImageData();
	}, []);

	const clipboardHandler = () => {
		navigator.clipboard.writeText(imageData);
		toast.success("Added to clipboard");
	};

	return (
		<>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="w-[400px] h-[455px] flex flex-col px-6 justify-evenly items-center bg-[#FFFFFF] rounded-xl shadow-[0px_4px_12px_0_rgba(0,0,0,0.10)]"
			>
				<div className="p-2 bg-green-600 rounded-full text-white">
					<BsCheckLg size={32} />
				</div>
				<p className="text-[18px] text-[#4F4F4F]">
					Upload SuccessFully!
				</p>
				<img
					src={imageData}
					alt="uploaded image"
					className="w-[350px] h-[225px] rounded-lg"
				/>
				<div className="w-full">
					<div className="text-[8px] relative rounded-lg p-3 bg-[#F6F8FB] border-[1px] border-[#E0E0E0]">
						<p className="w-[250px] truncate">{imageData}</p>
						<button
							className="absolute py-3 px-5 rounded-lg text-[#FFFFFF] right-0 top-[50%] -translate-y-[50%] bg-[#2F80ED] hover:opacity-80"
							onClick={clipboardHandler}
						>
							Copy Link
						</button>
					</div>
				</div>
			</motion.div>
			<Toaster />
		</>
	);
}

export default ImageUploadResult;
