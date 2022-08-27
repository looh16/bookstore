import http from '../http-common';

const getAllBooks = () => http.get();
const addBook = (data) => http.post('', data);
const removeBook = (id) => http.delete(`/${id}`);

const BookService = {
  getAllBooks,
  addBook,
  removeBook,
};

export default BookService;
