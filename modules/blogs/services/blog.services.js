const Blog = require('../models/blog');

async function createBlog(body) {
    try {
        const { title, content, author } = body;
        const blog = await Blog.create({ title, content, author });
        return blog;
    } catch (error) {
        throw new Error('Error creating blog post');
    }
}

async function getAllBlogs() {
    try {
        const blogs = await Blog.findAll();
        return blogs;
    } catch (error) {
        throw new Error('Error fetching blog posts');
    }
}

async function getBlogById(id) {
    try {
        const blog = await Blog.findByPk(id);
        if (!blog) {
            throw new Error('Blog post not found');
        }
        return blog;
    } catch (error) {
        throw new Error('Error fetching blog post');
    }
}

async function updateBlog(id, body) {
    try {
        const { title, content, author } = body;
        const [updated] = await Blog.update({ title, content, author }, {
            where: { id }
        });
        if (updated) {
            const updatedBlog = await Blog.findByPk(id);
            return updatedBlog;
        }
        throw new Error('Blog post not found');
    } catch (error) {
        throw new Error('Error updating blog post');
    }
}

async function deleteBlog(id) {
    try {
        const deleted = await Blog.destroy({
            where: { id }
        });
        if (!deleted) {
            throw new Error('Blog post not found');
        }
    } catch (error) {
        throw new Error('Error deleting blog post');
    }
}


module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
};
