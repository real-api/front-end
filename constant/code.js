const BASE_URL = 'http://localhost:3300';

const getAllProducts = [
  `fetch('${BASE_URL}/blogs')
      .then(res => res.json())
      .then(json => console.log(json))`,
  `fetch('${BASE_URL}/blogs')
      .then(res => res.json())`,
];

export { getAllProducts };
