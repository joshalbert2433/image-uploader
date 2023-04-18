const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8181;

const ImageUploadRoutes = require("./routes/imageUpload.routes");

app.use(cors());

app.use(express.static(__dirname + "/static"));

app.use("/api/upload", ImageUploadRoutes);

app.get("/api/sample", (req, res) => {
	res.sendFile(
		__dirname +
			"/images/1681746627541--a9c191f86af3c20c4177a2643b3150dc_tn.jpg"
	);
});

app.listen(PORT, () => {
	console.log(`listening in port ${PORT}`);
});
