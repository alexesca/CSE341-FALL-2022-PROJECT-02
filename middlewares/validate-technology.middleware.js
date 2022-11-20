const {get} = require('lodash');

exports.validate = (req, res) => {
    const body = get(req, 'body');
    const name = get(body, 'name');
    const description = get(body, 'description');
    const logo = get(body, 'logo');

    if(!name || !description || !logo) throw new Error("All fields are required.");

}
