const jwt = require('jsonwebtoken');

// //////

// signToken: function ({ firstName, email, _id }) {
//     const payload = {firstName, email, _id };

//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
// }

//////

const secretKey = 'ieufmvndke7KJDHDKjdjf649gjkfidjJhfjfgh8DUFJFMdzzzzxzxzxz';
const expiration = '2h';

function generateToken({ firstName, email, _id }) {
    // Create and return a JWT
    const payload = { firstName, email, _id }
    return jwt.sign({ data: payload }, secretKey, { expiresIn: expiration });
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