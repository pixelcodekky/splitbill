const mongoose = require('mongoose');

const FriendSchema = new mongoose.Schema({
    name: {
        type: String,
        require: 'Name Require'
    },
    optional: {
        type: String,
        require: 'Optional Require'
    }
},{
    timestamps: true
});

module.exports = mongoose.model('friend', FriendSchema);