module.exports = (req, res, next) => {
    if (req.isAuthenticated()) { return next(); }
    next("Unauthorized user.")
}
