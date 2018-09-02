const sigIn = (req, res, knex, bcrypt) => {
    knex.select('email', 'hash').from('login').where('email', '=', req.body.email)
        .then(data => {
            const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
            if (isValid) {
                return knex.select('*').from('users').where('email', '=', req.body.email)
                    .then(user => res.json(user[0]))
                    .catch(err => res.status(404).send(err));
            } else {
                res.status(404).send('Wrong credentials');
            }
        })
        .catch(err => res.status(404).send(err));
};

module.exports = {
    sigInHandler: sigIn
}