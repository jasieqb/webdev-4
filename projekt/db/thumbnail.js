const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ThumbnailSchema = new Schema({
    typ: String
});

const Thumbnail = mongoose.model('Thumbnail', ThumbnailSchema);
module.exports = Thumbnail;
