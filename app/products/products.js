// pages/api/products.js
export default async function handler(req, res) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const products = posts.map(post => ({
      id: post.id,
      name: post.title,
      description: post.body,
      price: `$${(post.id + 10) * 5}.99`,
      image: '/product1.jpg'
    }));
    res.status(200).json(products);
  }
  