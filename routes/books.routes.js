// grab express router method
const express = require('express');
const router = express.Router();
// grab controller handlers
const {
  getBooks,
  addBook,
  updateBook,
  removeBook,
} = require('./../controllers/books.controller')

// define routes with router
router
    .get('/:id', getBooks)
    .post('/', addBook)
    .put('/:id', updateBook)
    .delete('/:id', removeBook);

// export router
module.exports = router;