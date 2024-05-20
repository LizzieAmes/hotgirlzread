import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchBooks = () => axios.get(`${API_URL}/books`);
export const fetchBook = (id) => axios.get(`${API_URL}/books/${id}`);
