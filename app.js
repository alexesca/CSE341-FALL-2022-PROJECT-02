var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
var cors = require('cors');
const passport = require('passport');
var csrf = require('csurf');
var methodOverride = require('method-override');
var partials = require('express-partials');

var indexRouter = require('./routes/index');
const swaggerDocument = require('./swagger-output.json');
const session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals.pluralize = require('pluralize');

app.use(logger('dev'));
app.use(express.json());
app.use(partials());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

function errorHandler (err, req, res, next) {
  res.status(500).send({ error: err })
}

app.use(errorHandler);

module.exports = app;
