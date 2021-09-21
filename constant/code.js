const BASE_URL = 'http://localhost:3300';
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
  `fetch('${BASE_URL}/blogs/613e4f660d6ff89175fb6fa5')
    .then(res => res.json())
    .then(json => console.log(json))`,
  `fetch('${BASE_URL}/blogs/613e4f660d6ff89175fb6fa5')
    .then(res => res.json())`,
];

const deleteFakeBlogById = [
  `fetch('${BASE_URL}/blogs/613e4f660d6ff89175fb6fa5', {method: 'DELETE'})
    .then(res => res.json())
    .then(json => console.log(json))`,
  `fetch('${BASE_URL}/blogs/613e4f660d6ff89175fb6fa5', {method: 'DELETE'})
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
      name: <your name>,
      email: <your email>,
    }),
  })
  .then((response) => response.json())
  .then((json) => console.log(json))`,
];

const login = [
  `fetch('http://localhost:3300/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: <your email>,
      password: <your password>,
    }),
  })
  .then((response) => response.json())
  .then((json) => console.log(json))`,
];

// Real Blogs ==================================================================
const getAllBlogs = [
  `fetch('${BASE_URL}/api/panel/blogs', {
    headers: {
      'Authorization': 'Bearer <your token>',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))`,
];

const getBlogById = [
  `fetch('${BASE_URL}/api/panel/blogs/<blog_id>', {
    headers: {
      'Authorization': 'Bearer <your token>',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))`,
];

const deleteBlogById = [
  `fetch('${BASE_URL}/api/panel/blogs/<blog_id>', {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer <your token>',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))`,
];

// Real comments ==================================================================
const getAllComments = [
  `fetch('${BASE_URL}/api/panel/comments', {
    headers: {
      'Authorization': 'Bearer <your token>',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))`,
];

const getBlogComments = [
  `fetch('${BASE_URL}/api/panel/comments/<blog_id>/blog', {
    headers: {
      'Authorization': 'Bearer <your token>',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))`,
];

const sendComment = [
  `fetch('http://localhost:3300/api/panel/comments/<blog_id>',
    {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer <token>',
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        text: 'test comment',
      }),
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json))`,
];

export {
  getAllFakeBlogs,
  getFakeBlogById,
  deleteFakeBlogById,
  getAllFakeComments,
  getFakeCommentById,
  deleteFakeCommentById,
  register,
  login,
  getAllBlogs,
  getBlogById,
  deleteBlogById,
  getAllComments,
  getBlogComments,
  sendComment,
};
