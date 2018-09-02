const profile = (req, res, knex) => {
    const {
        id
    } = req.params;
    knex.select('*').from('users').where({
            id: id
        })
        .then(user => {
            if (user.length) {
                res.json(user[0]);
            } else {
                res.status(404).send({
                    error: 'User not found'
                });
            }
        }).catch(err => res.status(404).send(err));
};

module.exports = {
    profileHandler: profile
}