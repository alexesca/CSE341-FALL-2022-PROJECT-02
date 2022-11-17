const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ScriptsSchema = new Schema({
    _userId: mongoose.mongo.ObjectId,
    _languageId: mongoose.mongo.ObjectId,
    name: String,
    description: String,
    script: String,
    date: Date,
    shortName: String
});

const ScriptsModel = mongoose.model('Scripts', ScriptsSchema);
module.exports = ScriptsModel;
