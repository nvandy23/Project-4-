
const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite'); 
const favoritesCtrl =require("../controllers/favorites")

router.post("/save", favoritesCtrl.save)
router.get('/user/:userId', favoritesCtrl.getFavoritesByUserId);
router.delete('/:favoriteId', favoritesCtrl.deleteFavorite);
router.post('/update/:favoriteId', favoritesCtrl.updateFavorite);


module.exports = router;

// test
// test1
//test2
