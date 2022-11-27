const Technology = require('./../db/models/technologies.js');

exports.fetch = async (req, res, next) => {
    const technologies = await Technology.find();
    res.locals.technologies = technologies;
    next();
}
