const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8181;

const ImageUploadRoutes = require("./routes/imageUpload.routes");

app.use(cors());

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/upload", ImageUploadRoutes);

app.get("/api/getImage/:fileName", (req, res) => {
	const fileName = req.params.fileName;
	res.json(`localhost:8080/images/resized/${fileName}`);
});

app.listen(PORT, () => {
	console.log(`listening in port ${PORT}`);
});
