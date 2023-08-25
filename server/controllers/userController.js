const { User } = require('../models/User.js')

module.exports = {
    // Get all users
    async getUsers(req, res) {
        try {
            const users = await User.find().populate('reports');
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
            console.log(err)
        }
    },
    // Get a user
    async getOneUser(req, res) {
        try {
            const user = await User.findOne({ email: req.body.email })
                .select('-__v')
                .populate('reports')

            if (!user) {
                return res.status(404).json({ message: 'No user with that email!' });
            }

            res.json({ user: user, message: 'Success' });
        } catch (err) {
            res.status(500).json(err);
            console.log(err)
        }
    },
    // Create a user
    async createUser(req, res) {
        try {
            await User.create(req.body);
            res.json({ message: "Success" });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // Delete a user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ email: req.body.email });

            if (!user) {
                res.status(404).json({ message: 'No user with that email' });
            }
            res.json({ message: 'User deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
}



