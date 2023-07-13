const ChatDetail = require('../models/chatDetail.model')

exports.create = (req, res) =>{
    if(!req.body.chat_id){
         return res.status(400).send({
             'message': 'Chat ID cant be empty'
         })
     }
 
     const chatDetail = new ChatDetail({
        chat_id : req.body.chat_id || 'Untitled',
        user_id: req.body.user_id,
        chat_text: req.body.chat_text
     })
 
     chatDetail.save()
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
            'message': 'Chat ID cant be empty'
        })
    }
    ChatDetail.findByIdAndUpdate(id, {
        chat_id : req.body.chat_id || 'Untitled',
        user_id: req.body.user_id,
        chat_text: req.body.chat_text
    }, {new:true}).then(chatDetail =>{
        res.send(chatDetail)
    }).catch(err =>{
        res.status(500).send({
            'message': 'Something went wrong!!',
            'error': err
        })
})}

exports.findAll =(req, res) =>{
    ChatDetail.find().then( chatDetails =>{
        res.send(chatDetails)
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

        ChatDetail.findById(id)
            .then(chatDetails => {
                if (!chatDetails) {
                    res.status(400).send({
                        'message': 'Student info not available!'
                    });
                    reject(new Error('Student info not available!'));
                } else {
                    res.send(chatDetails);
                    resolve(chatDetails);
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
    ChatDetail.findByIdAndRemove(id).then( chatDetails =>{
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