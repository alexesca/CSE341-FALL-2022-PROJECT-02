var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
var cors = require('cors');
const passport = require('passport');
var csrf = require('csurf');

var indexRouter = require('./routes/index');
const swaggerDocument = require('./swagger-output.json');
const session = require('express-session');

var SQLiteStore = require('connect-sqlite3')(session);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals.pluralize = require('pluralize');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(session({
  secret: 'keyboard cat',
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
}));
app.use(passport.authenticate('session'));


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
