
const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite'); 
const favoritesCtrl =require("../controllers/favorites")

router.post("/save", favoritesCtrl.save)


module.exports = router;



