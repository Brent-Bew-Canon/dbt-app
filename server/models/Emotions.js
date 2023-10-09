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
                unique: false
            }
        ],
        actions: [
            {
                type: String,
                unique: false
            }
        ]
    }
)

const Emotions = model('emotions', emotionsSchema);

module.exports = { Emotions }