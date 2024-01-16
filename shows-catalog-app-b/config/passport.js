const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User'); // Make sure to adjust the path based on your file structure

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK, // Adjust based on your frontend URL
}, 
async (accessToken, refreshToken, profile, cb) => {
  try {
    let user = await User.findOne({ googleId: profile.id });
    if (user) return cb(null, user);

    user = await User.create({
      name: profile.displayName,
      googleId: profile.id,
      email: profile.emails[0].value,
      avatar: profile.photos[0].value
    });

    return cb(null, user);
  } catch (err) {
    return cb(err);
  }
}));

passport.serializeUser(function(user, cb) {
    cb(null, user._id);
  });
  
  passport.deserializeUser(async function (userId, cb) {
    cb(null, await User.findById(userId));
  });
  
  


