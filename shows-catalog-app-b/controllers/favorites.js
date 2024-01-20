
const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite'); 


async function save (req,res,next) {
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
};


async function getFavoritesByUserId(req, res, next) {
  try {
    const userId = req.params.userId;
    const favorites = await Favorite.find({ user: userId });
    res.status(200).json(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteFavorite (req, res,next) {
    try {
      await Favorite.findByIdAndDelete(req.params.favoriteId);
      res.status(200).end();
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = { 
    save, 
    getFavoritesByUserId,
    deleteFavorite};

