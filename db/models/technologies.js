const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TechnologySchema = new Schema({
    _userId: Schema.Types.ObjectId,
    name: String,
    description: String,
    logo: String
});

const TechnologyModel = mongoose.model('Technology', TechnologySchema);
module.exports = TechnologyModel;
