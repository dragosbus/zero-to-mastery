const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'dragos',
        database: 'smart-brain'
    }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    knex.select('*').from('users')
        .then(user => {
            res.send(user[0])
        }).catch(err => {
            res.status(404).send(err);
        });
});

app.post('/signin', (req, res) => signin.sigInHandler(req, res, knex, bcrypt));

app.post('/register', (req, res) => register.handleRegister(req, res, knex, bcrypt))

app.get('/profile/:id', (req, res) => profile.profileHandler(req, res, knex));

app.put('/image', (req, res) => image.imageHandler(req, res, knex));

app.listen(8080, () => {
    console.log('App is running on port 8080');
});