const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  favoriteFoods: [String ],
  age: Number,
});

module.exports = mongoose.model("contact", ContactSchema);
