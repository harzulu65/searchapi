const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const BookSchema = new Schema({
  title: {
    type: String,
  },
  path: {
    type: String,
  }
});

const Book = mongoose.model("book", BookSchema);

module.exports = Book;