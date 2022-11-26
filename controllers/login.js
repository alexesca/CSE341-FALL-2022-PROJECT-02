const Users = require("./../db/models/users");

exports.signup = async (req, res) => {
    console.log(req.body);
    const user = await Users.create(req.body);
    res.redirect('/');
}
