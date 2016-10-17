'use strict';

if (process.env.NODE_ENV !== `production`) {
  require(`dotenv`).config();
}

const express = require(`express`);
const cookieParser = require(`cookie-parser`);
const bodyParser = require(`body-parser`);
const session = require(`express-session`);
const logger = require(`morgan`);
const path = require(`path`);
// const favicon = require(`serve-favicon`);
const passport = require(`passport`);
// const local = require(`passport-local`).Strategy

const auth = require(`./auth`);
const routes = require(`./routes/index`);
const users = require(`./routes/users`);

const app = express();

// view engine setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitalized: false
}));
app.use(auth.passport.initialize());
app.use(auth.passport.session());


app.use('/', routes);
// app.use('/users', users);
// app.use(`/profile`, profile);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
