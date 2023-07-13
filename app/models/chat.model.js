const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
    chat_id: Number, 
    group_id: Number,
    user_id: String
},{
    timestamps: true
});


module.exports = mongoose.model('Chat', ChatSchema);
