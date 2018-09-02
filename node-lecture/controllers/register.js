const register = (req, res, knex, bcrypt) => {
    const {
        email,
        name,
        password
    } = req.body;
    if (!email || !name || !password) {
        return res.status(404).send({
            error: 'Please fill the inputs'
        });
    }
    const hash = bcrypt.hashSync(password);
    knex.transaction(trx => {
        trx.insert({
                hash: hash,
                email: email
            })
            .into('login')
            .returning('email')
            .then(loginEmail => {
                return trx('users').returning('*').insert({
                    email: loginEmail,
                    name: name,
                    joined: new Date()
                }).then(user => {
                    res.json(user[0]);
                }).catch(err => res.status(400).send(err));
            })
            .then(trx.commit)
            .catch(trx.rollback);
    })
};

module.exports = {
    handleRegister: register
}