const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tvShowSchema = new Schema(
  {
    title: { type: String, maxlength: 100 },
    genre: { type: String, enum: ["Action", "Comedy", "Drama", "Fantasy", "Horror", "Sci-Fi", "Documentary", "Mystery", "Romance", "Animation"] },
    description: { type: String, maxlength: 200 },
    rating: { type: Number, min: 1, max: 10 },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TVShow", tvShowSchema);
