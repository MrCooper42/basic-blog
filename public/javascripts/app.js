'use strict'

$(document).ready(() => {
  console.log("im here");
  $('.modal-trigger').leanModal();
  // putPost();
  // deletePost();
});

const id = this.post.id

const putPost = () => {
  $('.edit-post').click(() => {
    $.ajax({
      url: `/`,
      method: 'PUT',
      success: () => {
        console.log('post updated');
      },
      fail: () => {
        console.log('stop fucking up');
      }
    })
  })
}

const deletePost = () => {
  $('.delete-post').click(() => {
    console.log(id);
    $.ajax({
      url: `/${id}`,
      method: 'DELETE',
      success: () => {
        console.log('post was deleted');
      }
    })
  })
}
