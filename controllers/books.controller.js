const Book = require('./../models/book.model');

exports.getBooks = async (req, res) => {
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }
  try {
    // filter by id param if relevant, to find specific book review
    const books = await Book.find(query);
    res.status(200).json(books);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addBook = async (req, res) => {
  // grab data in request
  const bookData = req.body;
  console.log('bookData', bookData);
  try {
    // create new document with data and save in database
    const newBook = new Book(bookData);
    const result = await newBook.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateBook = async (req, res) => {
  try {
    // filter by id param, and update with request body
    const result = await Book.updateOne({ _id: req.params.id }, req.body);
    // if no doc affected send status 404 nothing found
    if (result.n === 0) return res.sendStatus(404);
    // o.w. send ok 200 status
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.removeBook = async (req, res) => {
  try {
    // send id param down the wire to delete relevant doc
    const result = await Book.deleteOne({ _id: req.params.id });
    // if no doc affected send status 404 nothing found
    if (result.n === 0) return res.sendStatus(404);
    // o.w. send ok 204 status (no content)
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err);
  }
};
