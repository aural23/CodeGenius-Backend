const User = require('../models/user.model')

exports.create = (req, res) =>{
    if(!req.body.name){
         return res.status(400).send({
             'message': 'Name cant be empty'
         })
     }
 
     const user = new User({
        name : req.body.name || 'Untitled',
        user_id: req.body.user_id,
        user_password: req.body.user_password
     })
 
     user.save()
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

    if(!req.body.name){
        return res.status(400).send({
            'message': 'Name cant be empty'
        })
    }
    User.findByIdAndUpdate(id, {
        name : req.body.name || 'Untitled',
        user_id: req.body.user_id,
        user_password: req.body.user_password
    }, {new:true}).then(user =>{
        res.send(user)
    }).catch(err =>{
        res.status(500).send({
            'message': 'Something went wrong!!',
            'error': err
        })
})}

exports.findAll =(req, res) =>{
    User.find().then( users =>{
        res.send(users)
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

        User.findById(id)
            .then(users => {
                if (!users) {
                    res.status(400).send({
                        'message': 'Student info not available!'
                    });
                    reject(new Error('Student info not available!'));
                } else {
                    res.send(users);
                    resolve(users);
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
    User.findByIdAndRemove(id).then( users =>{
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