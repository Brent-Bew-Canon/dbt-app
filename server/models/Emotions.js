const { Schema, model } = require('mongoose');

//Schema to create Project model
const emotionsSchema = new Schema(
    {
        emotionName: {
            type: String,
            required: true,
            unique: true
        },
        sEmotions: [
            {
                type: String,
                unique: true
            }
        ],
        promptingEvents: [
            {
                type: String,
                unique: true
            }
        ],
        actions: [
            {
                type: String,
                unique: true
            }
        ]
    }
)

const Emotions = model('emotions', emotionsSchema);

module.exports = { Emotions }