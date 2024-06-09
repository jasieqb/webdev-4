const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AdministratorSchema = new Schema({
    prawa: [String] // Zakładam, że prawa to lista uprawnień
});

const Administrator = mongoose.model('Administrator', AdministratorSchema);
module.exports = Administrator;
