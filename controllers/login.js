const Users = require("./../db/models/users");

exports.signup = async (req, res) => {
    const user = await Users.create(req.body);
    res.redirect('/');
}
