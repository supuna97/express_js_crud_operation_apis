const express = require("express");
const app = express();
const port = 3030;

//middleware
app.use(express.json());

//routes
const userRoute = require("./src/routes/api_v1");
app.use("/v1", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
