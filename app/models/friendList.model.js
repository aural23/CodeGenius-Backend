const mongoose = require('mongoose');

const FriendListSchema = mongoose.Schema({
    user_id: String,
    user_id_2: String
},{
    timestamps: true
});

module.exports = mongoose.model('FriendList', FriendListSchema);
