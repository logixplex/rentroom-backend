const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const secret_key  = process.env.JWT_SECRET_KEY;

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const decoded = jwt.verify(token, secret_key);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;