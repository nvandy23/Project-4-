var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = (require('express-session'))
const cors = require('cors');
require("dotenv").config();
require('./shows-catalog-app-b/config/database');
const methodOverride = require('method-override');


var favoritesRouter =require('./shows-catalog-app-b/routes/favorites')
// var showsRouter = require('./routes/shows');
// const moviesRouter =require('./routes/movies');
// const profileRouter =require('./routes/profile');
// const trendingRouter =require('./routes/trending');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(methodOverride('_method'));


app.use('/favorites',favoritesRouter)
// app.use('/shows', showsRouter);
// app.use('/movies',moviesRouter);
// app.use('/profile',profileRouter);
// app.use('/trending',trendingRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;