const FriendList = require('../models/friendList.model')

exports.create = (req, res) =>{
    if(!req.body.user_id){
         return res.status(400).send({
             'message': 'User Id cant be empty'
         })
     }
 
     const friendList = new FriendList({
        user_id: req.body.user_id || 'Untitled',
        user_id_2: req.body.user_id_2
     })
 
     friendList.save()
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

    if(!req.body.user_id){
        return res.status(400).send({
            'message': 'User ID cant be empty'
        })
    }
    FriendList.findByIdAndUpdate(id, {
        user_id: req.body.user_id || 'Untitled',
        user_id_2: req.body.user_id_2
    }, {new:true}).then(friendList =>{
        res.send(friendList)
    }).catch(err =>{
        res.status(500).send({
            'message': 'Something went wrong!!',
            'error': err
        })
})}

exports.findAll =(req, res) =>{
    FriendList.find().then( friendLists =>{
        res.send(friendLists)
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

        FriendList.findById(id)
            .then(friendLists => {
                if (!friendLists) {
                    res.status(400).send({
                        'message': 'Student info not available!'
                    });
                    reject(new Error('Student info not available!'));
                } else {
                    res.send(friendLists);
                    resolve(friendLists);
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
    FriendList.findByIdAndRemove(id).then( friendLists =>{
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