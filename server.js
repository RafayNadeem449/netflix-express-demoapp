const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 1000;
const cors = require("cors");
const userRoutes = require("./Routes/User");
const movieRoutes = require("./Routes/Movie");
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/netflixdb")
  .then(() => console.log("DB Connected Successfully"))
  .catch(() => console.log("Error"));

app.use("", userRoutes);
app.use("", movieRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
