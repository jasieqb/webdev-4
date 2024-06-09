const moongoose = require('mongoose');

const Schema = moongoose.Schema;

let FileSchema = new Schema({
    name: String,
    weight: Number
});

const model = moongoose.model('File', FileSchema);

module.exports = model;
