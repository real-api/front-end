const BASE_URL = 'http://localhost:3300';

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

// Fake commentss ==================================================================
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

export {
  getAllFakeBlogs,
  getFakeBlogById,
  deleteFakeBlogById,
  getAllFakeComments,
  getFakeCommentById,
  deleteFakeCommentById,
};
