const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SessionSchema = new Schema({
    token: String,
    waznosc: Date
});

const Session = mongoose.model('Session', SessionSchema);
module.exports = Session;
