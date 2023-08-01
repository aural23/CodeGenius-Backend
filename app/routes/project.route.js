module.exports = (app) =>{
    const users = require('../controllers/user.controller');

    app.get('/users/:id', users.findOne);

    app.get('/getFriends/:id', users.findFriends);

    app.post('/login', users.findByUsername);

    app.post('/users', users.create);

    app.get('/users', users.findAll);

    app.put('/users/:id', users.update);

    app.delete('/users/:id', users.delete);

    //chat
    const chats = require('../controllers/chat.controller');

    app.get('/chats/:id', chats.findOne);

    app.get('/chats/:user_loged/:user_requested', chats.findChat);

    app.post('/chats', chats.create);

    app.get('/chats', chats.findAll);

    app.put('/chats/:id', chats.update);

    app.delete('/chats/:id', chats.delete);

    //chatDetail
    const chatDetails = require('../controllers/chatDetail.controller');

    //app.get('/chatDetails/:id', chatDetails.findOne);

    app.post('/chatDetails', chatDetails.create);

    app.get('/chatDetails/:id', chatDetails.findAll);

   // app.get('/chatDetails', chatDetails.findOneChat);

    app.put('/chatDetails/:id', chatDetails.update);

    app.delete('/chatDetails/:id', chatDetails.delete);

    //friendList
    const friendLists = require('../controllers/friendList.controller');

    app.get('/friendLists/:id', friendLists.findOne);

    app.post('/friendLists', friendLists.create);

    app.get('/friendLists', friendLists.findAll);

    app.put('/friendLists/:id', friendLists.update);

    app.delete('/friendLists/:id', friendLists.delete);




}