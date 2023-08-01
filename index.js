const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
});

app.use(cors({
    // origin: 'https://code-genius-psi.vercel.app', // For production
    origin: 'http://localhost:4200', // Fot testing in local machine
    methods: ['GET', 'POST'],
    credentials: true
}));


// Express middle ware import
// app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Handle socket connections
io.on('connection', (socket) => {
    console.log('a user connected');
    var users = []; // Array to store connected users

    socket.on('send-nickname', (userName) => {
        socket.nickname = userName;
        users.push(socket.nickname);
        console.log(users);
    });

    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', `${message}`, `${socket.userName}`);
    });

    socket.on('disconnect', () => {
        console.log('a user disconnected!');
    });
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
//MongoDB connection
const dbConfig = require('./config/project.config');
const mongoose = require('mongoose');

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => console.log("DB connection successful"))
    .catch(err => {
        console.log("DB connection is not successful... ", err);
    })


app.get('/', (req, res) => {
    res.json({
        "message": "It is working!!"
    })
})

require('./app/routes/project.route')(app)

http.listen(4000, () => {
    console.log('server is running!!!!!')
})

