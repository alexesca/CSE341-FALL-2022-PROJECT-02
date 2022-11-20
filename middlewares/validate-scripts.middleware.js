const {get} = require('lodash');
const isMongoId = require("validator/es/lib/isMongoId");

exports.validate = (req, res, next) => {
    const body = get(req, 'body');
    const _userId = get(body, '_userId');
    const name = get(body, 'name');
    const description = get(body, 'description');
    const script = get(body, 'script');
    const date = get(body, 'date');
    const shortName = get(body, 'shortName');

    if(!name || !description || !script || !date || !shortName) next("All fields are required.");
    if(!isMongoId(_userId)) next("Invalid mongo ID.");
}
