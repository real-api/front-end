const BASE_URL = 'https://api.freerealapi.com';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDg3MTQwODkxM2YwMjI1M2JiZmFmZCIsImVtYWlsIjoibWlsYWRhemFtaTEyMEBnbWFpbC5jb20iLCJpYXQiOjE2MzIxMzc1MzYsImV4cCI6MTYzMzg1NjA3NDE0Nn0.G7nrfdIx_TKwGarcbRJ5tHAa-Si6GBib_t_ufMET_G0';
const PASSWORD = 'cv6SEemUJdOUHH';

// Fake Blogs ==================================================================
const getAllFakeBlogs = [
  `fetch('${BASE_URL}/blogs')
    .then(res => res.json())
    .then(json => console.log(json))`,
  `fetch('${BASE_URL}/blogs')
    .then(res => res.json())`,
];

const getFakeBlogById = [
  `fetch('${BASE_URL}/blogs/61855769a678f4693601cb40')
    .then(res => res.json())
    .then(json => console.log(json))`,
  `fetch('${BASE_URL}/blogs/61855769a678f4693601cb40')
    .then(res => res.json())`,
];

const postFakeBlog = [
  `fetch('${BASE_URL}/blogs/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: "test text",
      title: "test title",
      tags: "tags1,tag2,tag3",
    })
  })
    .then(res => res.json())
    .then(json => console.log(json))`,
  `fetch('${BASE_URL}/blogs/',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: "test text",
      title: "test title",
      tags: "tags1,tag2,tag3",
    })
  })
    .then(res => res.json())`,
];

const deleteFakeBlogById = [
  `fetch('${BASE_URL}/blogs/61855769a678f4693601cb40', {method: 'DELETE'})
    .then(res => res.json())
    .then(json => console.log(json))`,
  `fetch('${BASE_URL}/blogs/61855769a678f4693601cb40', {method: 'DELETE'})
    .then(res => res.json())`,
];

// Fake comments ==================================================================
const getAllFakeComments = [
  `fetch('${BASE_URL}/comments')
  .then(res => res.json())
  .then(json => console.log(json))`,
  `fetch('${BASE_URL}/comments')
  .then(res => res.json())`,
];

const getFakeCommentById = [
  `fetch('${BASE_URL}/comments/613e50cb0d6ff89175fb6fce')
  .then(res => res.json())
  .then(json => console.log(json))`,
  `fetch('${BASE_URL}/comments/613e50cb0d6ff89175fb6fce')
  .then(res => res.json())`,
];

const postFakeComment = [
  `fetch('${BASE_URL}/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: "test text"
    })
  })
    .then(res => res.json())
    .then(json => console.log(json))`,
  `fetch('${BASE_URL}/comments',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: "test text"
    })
  })
    .then(res => res.json())`,
];

const deleteFakeCommentById = [
  `fetch('${BASE_URL}/comments/613e50cb0d6ff89175fb6fce', {method: 'DELETE'})
      .then(res => res.json())
      .then(json => console.log(json))`,
  `fetch('${BASE_URL}/comments/613e50cb0d6ff89175fb6fce', {method: 'DELETE'})
      .then(res => res.json())`,
];

// Authentication ==================================================================
const register = [
  `fetch('${BASE_URL}/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: <test name>,
      email: <test email>,
      password: <test password>,
    })
  })
  .then((response) => response.json())
  .then((json) => console.log(json))`,
];

const login = [
  `fetch('http://localhost:3300/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: <test email>,
      password: <test password>,
    })
  })
  .then((response) => response.json())
  .then((json) => console.log(json))`,
];

// Real Blogs ==================================================================
const getAllBlogs = [
  `fetch('${BASE_URL}/panel/blogs', {
    headers: {
      'Authorization': 'Bearer <test token>',
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json))`,
];

const getBlogById = [
  `fetch('${BASE_URL}/panel/blogs/<blog_id>', {
    headers: {
      'Authorization': 'Bearer <test token>',
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json))`,
];

const postBlog = [
  `const data = new FormData();
  data.append('title', 'test title');
  data.append('text', 'test text');
  data.append('image', file);
  data.append('tags', 'one,two,three');
  axios.post('${BASE_URL}/panel/blogs/', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer <test token>',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))`,
];

const updateBlog = [
  `const data = new FormData();
  data.append('title', 'updated title');
  data.append('text', 'updated text');
  data.append('image', updated file);
  data.append('tags', 'four,five,six');
  axios.patch('${BASE_URL}/panel/blogs/<blog_id>', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer <test token>',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))`,
];

const deleteBlogById = [
  `fetch('${BASE_URL}/panel/blogs/<blog_id>', {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer <test token>',
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json))`,
];

// Real comments ==================================================================
const getAllComments = [
  `fetch('${BASE_URL}/panel/comments', {
    headers: {
      'Authorization': 'Bearer <test token>',
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json))`,
];

const getBlogComments = [
  `fetch('${BASE_URL}/panel/comments/<blog_id>/blog', {
    headers: {
      'Authorization': 'Bearer <test token>',
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json))`,
];

const sendComment = [
  `fetch('http://localhost:3300/panel/comments/<blog_id>',
    {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer <token>',
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        text: 'test comment',
      })
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json))`,
];

const replyComment = [
  `fetch('http://localhost:3300/panel/comments/?parent=<parent_comment_id>',
    {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer <token>',
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        text: 'reply comment',
      })
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json))`,
];

const confirmComment = [
  `fetch('http://localhost:3300/panel/comments/<comment_id>',
    {
      method: 'PATCH',
      headers: {
        'Authorization': 'Bearer <token>',
        'Content-Type': 'Application/json',
      }
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json))`,
];

const deleteComment = [
  `fetch('http://localhost:3300/panel/comments/<comment_id>',
    {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer <token>',
      }
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json))`,
];

export {
  getAllFakeBlogs,
  getFakeBlogById,
  postFakeBlog,
  deleteFakeBlogById,
  getAllFakeComments,
  getFakeCommentById,
  postFakeComment,
  deleteFakeCommentById,
  register,
  login,
  getAllBlogs,
  getBlogById,
  postBlog,
  updateBlog,
  deleteBlogById,
  getAllComments,
  getBlogComments,
  sendComment,
  replyComment,
  confirmComment,
  deleteComment,
};
