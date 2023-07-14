const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
    user_id: String,
    user_id_friend: String,
    group_id: Number,
    is_active: Boolean
},{
    timestamps: true
});


module.exports = mongoose.model('Chat', ChatSchema);
