const Script = require('./../db/models/scripts.js');

exports.fetch = async (req, res, next) => {
    const scripts = await Script.find();
    res.locals.scripts = scripts;
    next();
}
