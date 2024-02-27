const express = require("express");
const userRoutes = require('./modules/user/routes/user.routes');
const blogRoutes = require('./modules/blogs/routes/blog.routes');

const app = express();
app.use(express.json());

app.use(userRoutes, blogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));