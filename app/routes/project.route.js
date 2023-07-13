module.exports = (app) =>{
    const users = require('../controllers/user.controller');

    app.get('/users/:id', users.findOne);

    app.post('/users', users.create);

    app.get('/users', users.findAll);

    app.put('/users/:id', users.update);

    app.delete('/users/:id', users.delete);

    //chat
    const chats = require('../controllers/chat.controller');

    app.get('/chats/:id', chats.findOne);

    app.post('/chats', chats.create);

    app.get('/chats', chats.findAll);

    app.put('/chats/:id', chats.update);

    app.delete('/chats/:id', chats.delete);

    //chatDetail
    const chatDetails = require('../controllers/chatDetail.controller');

    app.get('/chatDetails/:id', chatDetails.findOne);

    app.post('/chatDetails', chatDetails.create);

    app.get('/chatDetails', chatDetails.findAll);

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