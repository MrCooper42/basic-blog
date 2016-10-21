'use strict'

const express = require('express');
const router = express.Router();
const auth = require(`../auth`);
const db = require(`../db/api`);

// router.get(`/`, (req, res) => {
//   db.getPosts().then(post => {
//     res.render('/', {
//       title: 'Something Cliche'
//       posts: posts
//     })
//   })
// })
//
// router.post(`/`, (req, res) => {
//   db.createPost().then(post => {
//     console.log(req.body.content, 'req body');
//     console.log(`post`, post);
//     res.redirect(`/`)
//   })
// })

module.exports = router;;
