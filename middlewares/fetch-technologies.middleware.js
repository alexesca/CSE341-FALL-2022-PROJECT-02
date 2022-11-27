const Technology = require('./../db/models/technologies.js');

exports.fetch = async (req, res, next) => {
    const technology = await Technology.find();
    res.locals.technology = technology;
    next();
}
