const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CommentSchema = new Schema({
    tresc: String,
    data: Date
});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
