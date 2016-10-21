'use strict';

const express = require('express');
const router = express.Router();
const auth = require(`../auth`);
const db = require(`../db/api`);

//get all posts
router.get(`/`, (req, res) => {
  Promise.db.getPosts().then(posts => {
    res.render(`index`, {
      user: req.user,
      posts: posts
    })
  })
})


//login
router.get(`/login`, (req, res) => {
  res.render(`login`, {
    user: req.user
  });
});


//auth
router.get(`/auth/google`, auth.passport.authenticate(`google`, {
  scope: ['openid email profile']
}));

//auth
router.get(`/auth/google/callback`, auth.passport.authenticate(`google`, {
    failureRedirect: `/login`
  }),
  (req, res) => {
    res.redirect(`/`);
  });

//logout
router.get(`/logout`, (req, res) => {
  req.logout();
  res.redirect(`/`);
});

//create a new post
router.post(`/`, (req, res) => {
  db.createPost(req.user.id, req.user.displayName, req.body.title, req.body.content).then(post => {
    res.redirect(`/`)
  })
})

//edit a post
router.post('/edit/:id', (req, res) => {
  db.updatePost(req.params.id, req.body).then(() => {
    res.redirect('/')
  })
})

//delete post
router.get('/:id', (req, res) => {
  db.deletePost(req).then(() => {
    res.redirect('/')
  })
})

//ensure authenticated
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect(`/login`);
}

module.exports = router;
