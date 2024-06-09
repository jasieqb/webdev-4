const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    imie: String,
    nazwisko: String,
    login: String,
    haslo: String,
    email: String
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
