const Blog = require('../../../models/blog');

async function createBlog(req, res) {
    try {
        const { title, content, author } = req.body;
        const blog = await Blog.create({ title, content, author });
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ error: 'Error creating blog post' });
    }
}

async function getAllBlogs(req, res) {
    try {
        const blogs = await Blog.findAll();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching blog posts' });
    }
}

async function getBlogById(req, res) {
    try {
        const blogId = req.params.id;
        const blog = await Blog.findByPk(blogId);
        if (!blog) {
            return res.status(404).json({ error: 'Blog post not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching blog post' });
    }
}

async function updateBlog(req, res) {
    try {
        const blogId = req.params.id;
        const { title, content, author } = req.body;
        const [updated] = await Blog.update({ title, content, author }, {
            where: { id: blogId }
        });
        if (updated) {
            const updatedBlog = await Blog.findByPk(blogId);
            return res.status(200).json(updatedBlog);
        }
        throw new Error('Blog post not found');
    } catch (error) {
        res.status(500).json({ error: 'Error updating blog post' });
    }
}

async function deleteBlog(req, res) {
    try {
        const blogId = req.params.id;
        const deleted = await Blog.destroy({
            where: { id: blogId }
        });
        if (!deleted) {
            throw new Error('Blog post not found');
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting blog post' });
    }
}

module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
};
