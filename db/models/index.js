const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    birthday: String,
    email: String,
    favoriteColor: String,
    firstName: String,
    lastName: String,
});

const ContactModel = mongoose.model('Contact', ContactSchema);
module.exports = ContactModel;
