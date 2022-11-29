const {get} = require('lodash');

exports.validate = (req, res, next) => {
    const body = get(req, 'body');
    const name = get(body, 'name');
    const description = get(body, 'description');
    const logo = get(body, 'logo');

    if(!name || !description || !logo) next("All fields are required.");
    next()
}
