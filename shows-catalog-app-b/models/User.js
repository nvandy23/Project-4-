const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String,
    favoriteMovies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
    favoriteTVShows: [{ type: Schema.Types.ObjectId, ref: 'TVShow' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
