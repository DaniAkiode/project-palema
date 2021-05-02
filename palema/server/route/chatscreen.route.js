const express = require('express');
const router = express.Router();
const ChatRoom = require('../model/chatscreen.model');

router.route('/').get((req, res) => {
    ChatRoom.find()
        .then(chatrooms => res.json(chatrooms))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const UserResponse = req.body.UserResponse;
    const ChatbotResponse = req.body.ChatbotResponse;

    const newResponse = new ChatRoom({
        UserResponse,
        ChatbotResponse
    });

    newResponse.save()
    .then(() => res.json('Response Added'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').get((req, res) => {
    ChatRoom.findById(req.params.id)
    .then(respo => res.json(respo))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    ChatRoom.findByIdAndDelete(req.params.id)
    .then(() => res.json('convo deleted'))
    .catch(err => res.status(400).json('Error: ' + err ));
});

module.exports = router;