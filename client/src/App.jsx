import "./App.css";
import ImageLoading from "./components/ImageLoading";
import ImageUploadResult from "./components/ImageUploadResult";
import ImageUploader from "./components/ImageUploader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<main className="flex justify-center items-center min-h-screen bg-[#FAFAFB]">
				<Router>
					<Routes>
						<Route path="/" element={<ImageUploader />} />
						<Route path="/loading" element={<ImageLoading />} />
						<Route path="/result" element={<ImageUploadResult />} />
					</Routes>
				</Router>
			</main>
			<footer className="absolute bottom-[20px] left-[50%] -translate-x-[50%]">
				<p className="text-[#A9A9A9]">
					created by{" "}
					<span className="font-bold underline cursor-pointer">
						joshalbert2433
					</span>{" "}
					- devChallenges.io
				</p>
			</footer>
		</>
	);
}

export default App;
