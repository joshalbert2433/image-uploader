const Express = require("express");
const app = Express();

require("dotenv").config();

const PORT = process.env.PORT || 8181;

const ImageUploadRoutes = require("./routes/imageUpload.routes");

app.use("/api/home", ImageUploadRoutes);

app.listen(PORT, () => {
	console.log(`listening in port ${PORT}`);
});
