import React, { useEffect } from "react";

function ImageLoading({ isLoading, progress, setProgress }) {
	useEffect(() => {
		if (isLoading) {
			const interval = setInterval(() => {
				const newProgress = progress + 1;

				if (newProgress >= 100) {
					setProgress(0);
				} else {
					setProgress(newProgress);
				}
			}, 20);
			return () => clearInterval(interval);
		}
	}, [progress, isLoading]);

	useEffect(() => {
		if (isLoading) {
			const interval = setInterval(() => {
				const newProgress = progress + 1;

				if (newProgress >= 100) {
					setProgress(0);
				} else {
					setProgress(newProgress);
				}
			}, 20);
			return () => clearInterval(interval);
		}
	}, [progress, isLoading]);

	return (
		<div className="min-w-[400px] min-h-[145px] px-8  flex flex-col justify-evenly bg-[#FFFFFF] shadow-[0px_4px_12px_0_rgba(0,0,0,0.10)] rounded-xl">
			<p className="font-medium text-[#4F4F4F] text-[18px]">
				Uploading...
			</p>
			<div className="relative h-2 w-full bg-[#F2F2F2] rounded-xl overflow-hidden">
				<div
					className={`absolute w-[120px] rounded-xl bg-[#2F80ED] top-0 bottom-0 `}
					style={{ left: progress + "%" }}
				></div>
			</div>
		</div>
	);
}

export default ImageLoading;
