const User = require('./../db/models/users.js');

exports.user = async (req, res, next) => {
    if(!req.user) return next('Missing authenticated user.');
    const username = req.user.username;
    const user = await User.findOne({username})
        .lean()
        .then(doc => JSON.parse(JSON.stringify(doc)));
    req.user = {...req.user, ...user};
    next();
}
