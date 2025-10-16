const axios = require('axios'); // npm install axios

async function fetchPostsWithAxios() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data; // Axios automatically parses JSON
  } catch (err) {
    throw new Error('Failed to fetch posts: ' + err.message);
  }
}

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const posts = await response.json();
  return posts;
}

async function countWordsInTitles() {
  try {
    const posts = await fetchPosts();

    const totalWords = posts.reduce((sum, post) => {
      const wordCount = post.title.split(' ').length;
      return sum + wordCount;
    }, 0);

    console.log('Total words in all titles:', totalWords);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

// 4️⃣ Call the async function
countWordsInTitles();
