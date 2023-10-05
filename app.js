const express = require("express");
const app = express();
require("dotenv").config();

const userRoute = require("./src/routes/api_v1");

//middleware
app.use(express.json());

//routes
app.use("/v1", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
