const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
//MongoDB connection
const dbConfig = require('./config/project.config');
const mongoose = require('mongoose');

mongoose.connect(dbConfig.url, {
    useNewUrlParser:true
}).then(()=>console.log("DB connection successful"))
    .catch(err =>{
        console.log("DB connection is not successful... ", err);
    })


app.get('/', (req, res)=>{
    res.json({
        "message": "It is working!!"
    })
})

require('./app/routes/project.route')(app)

app.listen(4000, ()=>{
    console.log('server is running!!!!!')
})

