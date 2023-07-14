const mongoose = require('mongoose');

const ChatDetailSchema = mongoose.Schema({
    user_id: String,
    group_id: Number,
    chat_id: String,
    chat_text: String
},{
    timestamps: true
});

module.exports = mongoose.model('ChatDetail', ChatDetailSchema);
