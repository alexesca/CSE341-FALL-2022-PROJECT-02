const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TechnologySchema = new Schema({
    name: String,
    description: String,
    logo: String
});

const TechnologyModel = mongoose.model('Technology', TechnologySchema);
module.exports = TechnologyModel;
