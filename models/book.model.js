// grab mongoose Schema method
const mongoose = require('mongoose');
const { Schema } = mongoose;;

// define schema
const bookSchema = Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  avatarUrl: {type: String, required: true},
  feelings: {type: String, required: false},
  characters: {type: String, required: false},
  writingStyle: {type: String, required: false},
  notLiked: {type: String, required: false},
  mostEnjoyed: {type: String, required: false},
  other: {type: String, required: false},
  rating: {type: Schema.Types.Decimal128, required: true},
})

// create model
const Book = mongoose.model('Book', bookSchema);

// export model
module.exports = Book;
