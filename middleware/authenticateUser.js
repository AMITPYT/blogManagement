const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Amitisagoodb$oy'; // Replace 'your_jwt_secret' with your actual JWT secret

// Middleware function to verify JWT token
function authenticateUser(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return res.sendStatus(401); // Unauthorized if no token provided
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden if token is invalid
        }
        req.user = user; // Attach decoded user data to request object
        next(); // Call next middleware or route handler
    });
}

module.exports = { authenticateUser };
