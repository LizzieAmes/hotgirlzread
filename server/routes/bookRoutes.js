const express = require('express');
const router = express.Router();
const {
  getBooks,
  getBookDetails,
  addBook,
  addComment,
  addRating,
} = require('../controllers/bookController');

router.get('/', getBooks);
router.get('/:id', getBookDetails);
router.post('/', addBook);
router.post('/:id/comments', addComment);
router.post('/:id/ratings', addRating);

module.exports = router;
