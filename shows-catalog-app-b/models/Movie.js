const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoritesSchema = new Schema(
  {
    name: {type: String, maxlength:30},
    genre: {type: String , enum: [
       "Action" , "Comedy", "Action","Fantasy","Horror","Reality","Documentary","Crime/Mystery","Talk","Animation","Game","Biography"
    ]},
    rating: {type: Number,min:1,max:10},
    description: {type: String, maxlength:150},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Favorite", favoritesSchema);
 