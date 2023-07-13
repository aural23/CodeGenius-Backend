const mongoose = require('mongoose');

const ChatDetailSchema = mongoose.Schema({
    chat_id: String,
    user_id: String,
    chat_text: String
},{
    timestamps: true
});

module.exports = mongoose.model('ChatDetail', ChatDetailSchema);
