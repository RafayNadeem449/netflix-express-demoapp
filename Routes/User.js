const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model("user", userSchema);

// User.insertMany([
//   { name: "Rafay", age: 40, email: "rafay@gmail.com" },
//   { name: "Hamza", age: 20, email: "hamza@gmail.com" },
//   { name: "Shehryar", age: 29, email: "sherry@gmail.com" },
//   { name: "Muqadaas", age: 19, email: "m@gamil.com" },
// ]);

router.get("/users", async (req, res) => {
    const data = await User.find();
    res.send(data);
});

module.exports = router;
