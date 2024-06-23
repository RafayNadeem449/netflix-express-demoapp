const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const movieSchema = mongoose.Schema({
  title: String,
  description: String,
  date: String,
  image: String,
});

const Movie = mongoose.model("movie", movieSchema);

router.get("/movies", async (req, res) => {
  const data = await Movie.find();
  res.send(data);
});

router.delete("/movies/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await Movie.deleteOne({ _id: id });
});

router.post("/movies", (req, res) => {
  const { title, description, date, image } = req.body;

  Movie.create({
    title: title,
    description: description,
    date: date,
    image: image,
  });
});

module.exports = router;
