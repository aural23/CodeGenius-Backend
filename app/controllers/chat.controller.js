const Chat = require('../models/chat.model')

exports.create = (req, res) =>{
    // if(!req.body.chat_id){
    //      return res.status(400).send({
    //          'message': 'Chat ID cant be empty'
    //      })
    //  }
 
     const chat = new Chat({
        user_id : req.body.user_id || 'Untitled',
        user_id_friend: req.body.user_id_friend,
        group_id: req.body.group_id,
        is_active: 1
     })
 
     chat.save()
         .then(data=> res.send(data))
         .catch(err =>{
             res.status(500).send({
                 'message': 'Something went wrong!!',
                 'error': err
             })
         });
}

exports.update = (req, res) =>{
    const id = req.params.id;

    if(!req.body.chat_id){
        return res.status(400).send({
            'message': 'Name cant be empty'
        })
    }
    Chat.findByIdAndUpdate(id, {
        chat_id : req.body.chat_id || 'Untitled',
        group_id: req.body.group_id,
        user_id: req.body.user_id
    }, {new:true}).then(chat =>{
        res.send(chat)
    }).catch(err =>{
        res.status(500).send({
            'message': 'Something went wrong!!',
            'error': err
        })
})}

exports.findAll =(req, res) =>{
    Chathat.find().then( chats =>{
        res.send(chats)
        }
    ).catch( err =>{
        res.status(500).send({
            'message': 'Something went wrong!!',
            'error': err
        })
    })
}

exports.findOne = (req, res) => {
    return new Promise((resolve, reject) => {
        const id = req.params.id;

        Chat.findById(id)
            .then(chats => {
                if (!chats) {
                    res.status(400).send({
                        'message': 'Student info not available!'
                    });
                   // reject(new Error('Student info not available!'));
                } else {
                    res.send(chats);
                    resolve(chats);
                }
            })
            .catch(err => {
                res.status(500).send({
                    'message': 'Something went wrong!!',
                    'error': err
                });
                reject(err);
            });
    });
};


exports.delete = (req, res) =>{
    const id = req.params.id;
    Chat.findByIdAndRemove(id).then( chats =>{
        res.send({
            'message': 'Removed!'
        })
        }
    ).catch( err =>{
        res.status(500).send({
            'message': 'Something went wrong!!',
            'error': err
        })
    })
}

exports.findChat = (req, res) => {
    return new Promise((resolve, reject) => {
        const user_loged = req.params.user_loged;
        const user_requested = req.params.user_requested;

        Chat.findOne({
            user_id: user_loged,
            user_id_friend: user_requested
        })
            .then(chats => {
                if (!chats) {
                    res.status(400).send({
                        'message': 'Chat not found!'
                    });
                    //reject(new Error('Chat info not available!'));
                } else {
                    res.send(chats);
                    resolve(chats);
                }
            })
            .catch(err => {
                res.status(500).send({
                    'message': 'Something went wrong!!',
                    'error': err
                });
                reject(err);
            });
    });
};