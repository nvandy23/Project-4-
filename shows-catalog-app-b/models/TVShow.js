const tvShowSchema = new Schema(
  {
    title: { type: String, maxlength: 100 },
    genre: { type: String, enum: ["Action", "Comedy", /*...other genres...*/] },
    description: { type: String, maxlength: 200 },
    rating: { type: Number, min: 1, max: 10 },
    // favorites: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

