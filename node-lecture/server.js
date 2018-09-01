const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = {
    users: [{
            id: '123',
            name: 'dragos',
            email: 'dragos@email.com',
            password: 'dragos',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'dragos1',
            email: 'dragos1@email.com',
            password: 'dragos1',
            entries: 0,
            joined: new Date()
        }
    ]
};

app.get('/', (req, res) => {
    res.json(db.users);
});

app.post('/signin', (req, res) => {
    bcrypt.compare(db.users[0].password, db.users[0].hash, (err, res)=>{
        console.log(res);
    });

    if (req.body.email === db.users[0].email && req.body.password === db.users[0].password) {
        res.json(db.users[0]);
    } else {
        res.status(400).send({
            error: 'User not exist'
        });
    }
});

app.post('/register', (req, res) => {
    const {
        email,
        name,
        password
    } = req.body;
    bcrypt.hash(password, null, null, (err, hash)=>{
        console.log(hash);
    });
    db.users.push({
        id: '125',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    });
    res.send(db.users);
});

app.get('/profile/:id', (req, res) => {
    const {
        id
    } = req.params;
    db.users.forEach(user => {
        if (user.id === id) {
            res.json(user);
        } else {
            res.status(404).send({
                error: "No such user"
            });
        }
    });
});

app.put('/image', (req, res)=>{
    const {id} = req.body;
    db.users.forEach(user=>{
        if(user.id === id) {
            user.entries+=1;
        }
        res.json(user);
    });
});

app.listen(8080, () => {
    console.log('App is running on port 8080');
});