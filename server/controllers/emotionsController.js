const { Emotions } = require('../models/Emotions.js')

module.exports = {
    // Get all emotions
    async getEmotions(req, res) {
        try {
            const emotions = await Emotions.find();
            res.json(emotions);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Get a emotions by id
    async getEmotionsById(req, res) {
        try {
            const emotions = await Emotions.findOne({ _id: req.params.emotionsId })
                .select('-__v');

            if (!emotions) {
                return res.status(404).json({ message: 'No emotions with that Id!' });
            }

            res.json({ emotions: emotions, message: 'Success' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Create a emotions
    async createEmotions(req, res) {
        try {
            const emotions = await Emotions.create(req.body);
            res.json({ emotions: emotions, message: "Success" });
        } catch (err) {
            return res.status(500).json('Error creating emotions:');
        }
    },
    // Delete a emotions
    async deleteEmotions(req, res) {
        try {
            const emotion = await Emotions.findOneAndDelete({ emotionName: req.body.emotionName });

            if (!emotion) {
                res.status(404).json({ message: 'No emotion found with that name' });
            }
            res.json({ message: 'Emotion deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Update a emotions
    async updateEmotions(req, res) {
        try {
            const emotion = await Emotions.findOneAndUpdate(
                { emotionName: req.body.emotionName },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!emotion) {
                res.status(404).json({ message: 'No emotion with this name!' });
            }

            res.json(emotion);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}