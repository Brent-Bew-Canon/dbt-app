const { Reports } = require('../models/Reports.js')

module.exports = {
    // Get all reports
    async getReports(req, res) {
        try {
            const reports = await Reports.find();
            res.json(reports);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Get a reports by id
    async getReportsById(req, res) {
        try {
            const reports = await Reports.findOne({ _id: req.params.reportsId })
                .select('-__v');

            if (!reports) {
                return res.status(404).json({ message: 'No reports with that Id!' });
            }

            res.json({ reports: reports, message: 'Success' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Create a reports
    async createReports(req, res) {
        try {
            const reports = await Reports.create(req.body);
            res.json({ reports: reports, message: "Success" });
        } catch (err) {
            return res.status(500).json('Error creating reports:', err);
        }
    },
    // Delete a reports
    async deleteReports(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { email: req.body.email },
                { $pull: { reports: req.body.reportsId } },
                { new: true }
            );

            const reports = await Reports.findOneAndDelete({ _id: req.body.reportsId });
            if (!reports) {
                res.json({ message: 'No reports with that Id' });
            }
            res.json({ message: 'Success', user: user });
            console.log(user);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Update a reports
    async updateReports(req, res) {
        try {
            const reports = await Reports.findOneAndUpdate(
                { reportsName: req.body.reportsName },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!reports) {
                res.status(404).json({ message: 'No reports with this name!' });
            }

            res.json(reports);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}