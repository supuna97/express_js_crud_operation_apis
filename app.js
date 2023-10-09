const express = require("express");
const app = express();
const cors = require('cors');

const userRoute = require("./src/routes/api_v1");

//middleware
app.use(express.json());
app.use(cors()); // Allow all origins (not recommended for production)

//routes
app.use("/v1", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
