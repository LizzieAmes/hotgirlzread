const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  comments: [{ user: String, comment: String }],
  ratings: [{ user: String, rating: Number }],
});

module.exports = mongoose.model('Book', BookSchema);
