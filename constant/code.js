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
    body: JSON.stringify({
      name: <your name>,
      email: <your valid email>
    })})
  .then(res => res.json())
  .then(json => console.log(json))`,
];

export {
  getAllFakeBlogs,
  getFakeBlogById,
  deleteFakeBlogById,
  getAllFakeComments,
  getFakeCommentById,
  deleteFakeCommentById,
  register,
};
