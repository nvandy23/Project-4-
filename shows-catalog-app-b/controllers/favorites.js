const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite');

const save = async (req, res, next) => {
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

const getFavoritesByUserId = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const favorites = await Favorite.find({ user: userId });
    res.status(200).json(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteFavorite = async (req, res, next) => {
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
  deleteFavorite
};


