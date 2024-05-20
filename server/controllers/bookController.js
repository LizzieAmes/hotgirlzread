const Book = require('../models/Book');
const axios = require('axios');

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getBookDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}?key=YOUR_API_KEY`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book details' });
  }
};

const addBook = async (req, res) => {
  const { title, author } = req.body;
  try {
    const newBook = new Book({ title, author });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const addComment = async (req, res) => {
  const { id } = req.params;
  const { user, comment } = req.body;
  try {
    const book = await Book.findById(id);
    book.comments.push({ user, comment });
    await book.save();
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const addRating = async (req, res) => {
  const { id } = req.params;
  const { user, rating } = req.body;
  try {
    const book = await Book.findById(id);
    book.ratings.push({ user, rating });
    await book.save();
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getBooks, getBookDetails, addBook, addComment, addRating };
