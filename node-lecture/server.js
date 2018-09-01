const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

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
    res.send('Is working')
});

app.post('/signin', (req, res) => {
    if (req.body.email === db.users[0].email && req.body.password === db.users[0].password) {
        res.json('Succes');
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