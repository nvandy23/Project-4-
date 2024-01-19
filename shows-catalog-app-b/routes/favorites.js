// routes/favorites.js

const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite'); // Import your Favorite model

// POST route to save favorite movie or show
router.post('/save', async (req, res) => {
  try {
    // Extract data from the request body
    const { name, genre, rating, description, userId } = req.body;

    // Create a new favorite instance
    const newFavorite = new Favorite({
      name,
      genre,
      rating,
      description,
      user: userId, // Assuming you have the user's ID from the frontend
    });

    // Save the favorite to the database
    const savedFavorite = await newFavorite.save();

    res.status(201).json(savedFavorite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;



