'use strict';

const express = require('express');
const router = express.Router();
const auth = require(`../auth`);


router.get(`/`, (req, res, next) => {
  res.render(`index`, {
    user: request.user
  });
});

router.get(`/login`, (req, res) => {
  res.render(`login`, {
    user: request.user
  });
});

router.get(`/auth/google/callback`, auth.passport.authenticate(`google`, {
    failureRedirect: `/login`
  }),
  (req, res) => res.redirect(`/`);
);

router.get(`/logout`, (req, res) => {
  req.logout();
  res.redirect(`/`);
});

//ensure authenticated
const ensureAuthenticated = (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect(`/login`);
}

module.exports = router;
