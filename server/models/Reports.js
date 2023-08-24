const { Schema, model } = require('mongoose');

//Schema to create Project model
const reportSchema = new Schema(
    {
        emotion: {
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
        date: {
            type: Date,
            default: Date.now,
        },
        promptingEvent: {
            type: String,
            required: false,
        },
        objective: {
            type: String,
            required: false,
        },
        actions: [
            {
                type: String,
                required: false,
            }
        ],
        success: {
            type: Boolean,
            required: false,
        },
        notes: {
            type: String,
            required: false,
        },
        fitFacts: {
            type: Boolean,
            required: false,
        },
        effective: {
            type: Boolean,
            required: false,
        }
    }
)

const Reports = model('report', reportSchema);

module.exports = { Reports }