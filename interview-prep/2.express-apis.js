const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

// In-memory databases
const users = [];
const articles = [];
const tokens = new Map();

// POST /api/user - Create user
app.post('/api/user', (req, res) => {
  try {
    const { user_id, login, password } = req.body;
    
    if (!user_id || !login || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const existingUser = users.find(u => u.user_id === user_id);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    users.push({ user_id, login, password });
    return res.status(201).json({ user_id, login });
  } catch (error) {
    return res.status(400).json({ error: 'Bad request' });
  }
});

// POST /api/authenticate - Login
app.post('/api/authenticate', (req, res) => {
  try {
    const { user_id, password } = req.body;
    
    if (!user_id || !password) {
      return res.status(400).json({ error: 'Missing credentials' });
    }
    
    const user = users.find(u => u.user_id === user_id && u.password === password);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = uuidv4();
    tokens.set(token, user_id);
    
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).json({ error: 'Bad request' });
  }
});

// POST /api/logout - Logout
app.post('/api/logout', (req, res) => {
  try {
    const token = req.headers['authentication-header'];
    
    if (!token) {
      return res.status(400).json({ error: 'Missing token' });
    }
    
    if (!tokens.has(token)) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    
    tokens.delete(token);
    return res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    return res.status(400).json({ error: 'Bad request' });
  }
});

// POST /api/articles - Create article
app.post('/api/articles', (req, res) => {
  try {
    const token = req.headers['authentication-header'];
    
    if (!token || !tokens.has(token)) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    
    const { article_id, title, content, visibility } = req.body;
    
    if (!article_id || !title || !content || !visibility) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const user_id = tokens.get(token);
    
    articles.push({ article_id, title, content, visibility, user_id });
    return res.status(201).json({ article_id, title, content, visibility });
  } catch (error) {
    return res.status(400).json({ error: 'Bad request' });
  }
});

// GET /api/articles - Get articles
app.get('/api/articles', (req, res) => {
  try {
    const token = req.headers['authentication-header'];
    const isAuthenticated = token && tokens.has(token);
    const user_id = isAuthenticated ? tokens.get(token) : null;
    
    const visibleArticles = articles.filter(article => {
      if (article.visibility === 'public') return true;
      if (!isAuthenticated) return false;
      if (article.visibility === 'logged_in') return true;
      if (article.visibility === 'private') return article.user_id === user_id;
      return false;
    });
    
    return res.status(200).json({ articles: visibleArticles });
  } catch (error) {
    return res.status(200).json({ articles: [] });
  }
});

// Export server
const PORT = process.env.HTTP_PORT || 3000;
module.exports = app.listen(PORT);