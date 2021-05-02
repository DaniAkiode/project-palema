const mongoose = require ("mongoose");

const ChatRoomSchema = new mongoose.Schema({
    UserResponse: {type: String, required: true},
    ChatbotResponse: {type: String, required: true}
},{
    timestamps: true,
});

module.exports = mongoose.model('ChatRoom', ChatRoomSchema );