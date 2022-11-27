const Users = require("./../db/models/users");

exports.signup = async (req, res) => {
    try {
        const user = await Users.create(req.body);
        res.redirect('/');
    } catch (e) {
        res.render('error')
    }
}
