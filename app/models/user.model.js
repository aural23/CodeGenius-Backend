const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String, 
    user_id: String,
    user_password: String
},{
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);