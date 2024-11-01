const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: 'regular'
    }
}, {
    timestamps: true, versionKey: false
});

const User = model('user', userSchema);
module.exports = User;