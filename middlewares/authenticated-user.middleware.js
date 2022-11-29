const User = require('./../db/models/users.js');

exports.authenticatedUser = async (req, res, next) => {
    const username = req.user.username;
    const user = await User.find({username});
    res.user = {...req.user, ...user};
    next();
}
