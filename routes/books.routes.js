// const path = require("path");
// grab express router method
const express = require('express');
const router = express.Router();
// import express validator (for server side validation)
const { body, validationResult } = require('express-validator');

// grab controller handlers
const {
  getBooks,
  addBook,
  updateBook,
  removeBook,
} = require('./../controllers/books.controller');

// define routes with router
router
  .get('/:id?', getBooks)
  .post(
    '/',
    body('title').not().isEmpty().withMessage("cannot be an empty string").trim(),
    body('author').not().isEmpty().withMessage("cannot be an empty string").trim(),
    body('avatarUrl').trim().isURL().withMessage("must be a url"),
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      };
      addBook(req, res);
    }
  )
  .put(
    '/:id',
    body('title').not().isEmpty().withMessage("cannot be an empty string").trim(),
    body('author').not().isEmpty().withMessage("cannot be an empty string").trim(),
    body('avatarUrl').trim().isURL().withMessage("must be a url"),
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      };
      updateBook(req, res);
    }
  )
  .delete('/:id', removeBook);

// export router
module.exports = router;
