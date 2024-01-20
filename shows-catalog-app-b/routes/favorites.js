
const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite'); 
const favoritesCtrl =require("../controllers/favorites")

router.post("/save", favoritesCtrl.save)
router.get('/user/:userId', favoritesCtrl.getFavoritesByUserId);
router.delete('/:favoriteId', favoritesCtrl.deleteFavorite);



module.exports = router;



