const { User } = require('../models/User.js')
const { generateToken } = require("../utils/auth");
// const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.json({ message: "User with that email already exists" });
        }
        const user = await User.create(req.body);
        console.log(user)
        // const token = generateToken(user._id);
        const token = generateToken(user);
        console.log(token)
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res
            .status(201)
            .json({ message: "User signed in successfully", success: true, user });
        next();
    } catch (error) {
        console.error(error);
    }
};