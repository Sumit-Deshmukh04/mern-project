const express = require('express');
const Post = require('../models/Post');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  const { title, content, tags } = req.body;
  const post = new Post({ title, content, author: req.user.id, tags });
  await post.save();
  res.status(201).json(post);
});

router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author', 'username');
  res.json(posts);
});

router.put('/:id', authMiddleware, async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id, author: req.user.id });
  if (!post) return res.status(404).send('Post not found');

  post.title = req.body.title;
  post.content = req.body.content;
  post.tags = req.body.tags;
  post.updatedAt = Date.now();

  await post.save();
  res.json(post);
});

router.delete('/:id', authMiddleware, async (req, res) => {
  const post = await Post.findOneAndDelete({ _id: req.params.id, author: req.user.id });
  if (!post) return res.status(404).send('Post not found');
  res.status(204).send();
});

module.exports = router;