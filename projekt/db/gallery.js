const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GallerySchema = new Schema({
    tytul: String,
    opis: String,
    data: Date,
    widocznosc: Boolean
});

const Gallery = mongoose.model('Gallery', GallerySchema);
module.exports = Gallery;
