'use strict'

const knex = require(`./knex`);

const getUser = (profileId) => {
  return knex(`users`)
    .select()
    .where({
      google_id: profileId
    })
    .first();
};

const getAllUsers = () => {
  return knex(`users`)
}

const createUser = (profileId, name, photo) => {
  return knex(`users`)
    .insert({
      'google_id': profileId,
      'displayName': name,
      'photos': photo
    });
};


const getPosts = () => {
  return knex(`posts`)
    .select('*')
}

const createPost = (userId, displayName, title, content) => {
  return knex(`posts`).insert({
    'userId': userId,
    'displayName': displayName,
    'postTitle': title,
    'content': content
  })
}

const updatePost = (req_pId, editPost) => {
  return knex(`posts`).select()
    .where(`posts.id`, req_pId).first()
    .then((post) => {
      return knex(`posts`)
        .update({
          'postTitle': editPost.editTitle || post.title,
          'content': editPost.editContent || post.content
        }).where(`posts.id`, req_pId)
    })
}

const deletePost = (req) => {
  return knex(`posts`)
    .del()
    .where(`posts.id`, req.params.id)
}

const getPostComments = () => {
  return knex(`comments`)
    .join(`posts`, `posts.id`, `comments.postId`)
    // .join(`users`, `users.id`, `comments.userId`)
    .select(`*`)
}

const createComment = (comment) => {
  return knex(`comments`)
    .insert(comment);
}

module.exports = {
  getUser,
  getAllUsers,
  createUser,
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getPostComments,
  createComment
};
