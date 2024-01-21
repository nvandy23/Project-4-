const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoritesSchema = new Schema(
  {
    name: { type: String, maxlength: 100 },
    genre: { type: String, enum: ["Action", "Comedy", "Fantasy", "Horror", "Reality", "Documentary", "Crime/Mystery", "Talk", "Animation", "Game", "Biography"] },
    description: { type: String, maxlength: 1000 },
    rating: { type: Number, min: 1, max: 10 },
    type: { type: String, enum: ["movie", "tvshow"] }, 
    user: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Favorite", favoritesSchema);