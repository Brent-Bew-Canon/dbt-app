const jwt = require('jsonwebtoken');

const secretKey = 'ieufmvndke7KJDHDKjdjf649gjkfidjJhfjfgh8DUFJFMdzzzzxzxzxz';

function generateToken(user) {
    // Create and return a JWT
    return jwt.sign(user, secretKey, { expiresIn: '1h' });
}

function verifyToken(token) {
    // Verify and decode the token
    return jwt.verify(token, secretKey);
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }

        req.user = user; // Set the user object in the request
        next();
    });
}

module.exports = {
    generateToken,
    verifyToken,
    authenticateToken,
};