const Book = require('../models/Book');
const axios = require('axios');

const GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyDB73M7PoW5b0ELVLB062yv-VSUfhpvUJ0';

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
    const response = await axios.get(`${GOOGLE_BOOKS_API_URL}/${id}?key=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book details' });
  }
};

const searchBooks = async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(`${GOOGLE_BOOKS_API_URL}?q=${query}&key=${API_KEY}`);
    res.json(response.data.items);
  } catch (error) {
    res.status(500).json({ message: 'Error searching for books' });
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

module.exports = { getBooks, getBookDetails, searchBooks, addBook, addComment, addRating };
