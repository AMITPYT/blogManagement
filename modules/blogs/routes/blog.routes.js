const express = require('express');
const router = express.Router();
// const blogController = require('../controller/blog.controller');
// const { authenticateUser } = require('../../../middleware/authenticateUser');
const { blogController } = require('../controller');
const { authenticateUser } = require('../../../middleware/authenticateUser');

router.post('/blog', authenticateUser,  blogController.createBlog);
router.get('/blogs', blogController.getAllBlogs);
router.get('/blogs/:id',authenticateUser,  blogController.getBlogById);
router.put('/blogs/:id', authenticateUser,  blogController.updateBlog);
router.delete('/blogs/:id', authenticateUser,  blogController.deleteBlog);

module.exports = router;
