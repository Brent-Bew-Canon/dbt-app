const express = require('express')
// const cors = require('cors');
const db = require('./config/connection')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const port = 3000
const path = require('path')
const routes = require('./routes')
const app = express()

// Allows CORS on the client side
//app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// serve static file from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the static files from the client's build directory
// app.use(express.static(path.join(__dirname, '../client/build')));

//initialize session with secret, cookie, and store location
const sess = {
    secret: 'ieufmvndke7KJDHDKjdjf649gjkfidjJhfjfgh8DUFJFMdzzzzxzxzxz',
    cookie: {
        maxAge: 7200000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dbt' })
};

//Use express session middleware
app.use(session(sess));

//Utilize express routes
app.use(routes);

//Start the server
db.once('open', () => {
    app.listen(port, () => {
        console.log(`Server Live, running on port ${port}!`);
    });
});
app.get('/', (req, res) => { res.send('Server Live!') })