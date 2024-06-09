const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TagSchema = new Schema({
    tekst: String
});

const Tag = mongoose.model('Tag', TagSchema);
module.exports = Tag;
