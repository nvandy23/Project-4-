
const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite'); 


router.post('/save', async (req, res) => {
  try {
    const { name, genre, rating, description, userId } = req.body;

    const newFavorite = new Favorite({
      name,
      genre,
      rating,
      description,
      user: userId, 
    });
    
    const savedFavorite = await newFavorite.save();

    res.status(201).json(savedFavorite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;