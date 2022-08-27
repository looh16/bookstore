import BookService from '../../services/BooksService';

const GET_ALL_BOOKS = 'books/GET_ALL_BOOKS';
const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';

const initialState = [];

export const getAllBooks = () => async (dispatch) => {
  try {
    const res = await BookService.getAllBooks();
    dispatch({
      type: GET_ALL_BOOKS,
      payload: res.data,
    });
  } catch (err) {
    throw new Error(err);
  }
};
// eslint-disable-next-line camelcase
export const addBook = (item_id, title, author, category) => async (dispatch) => {
  try {
    const res = await BookService.addBook({
      // eslint-disable-next-line camelcase
      item_id, title, author, category,
    });
    dispatch({
      type: ADD_BOOK,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

/* export const addBook = (book) => async (dispatch) => {
  try {
    await BookService.addBook(book.bookObj);
    dispatch({
      type: ADD_BOOK,
      payload: {
        // eslint-disable-next-line camelcase
        book,
      },
    });
  } catch (err) {
    throw new Error(err);
  }
}; */

export const removeBook = (id) => async (dispatch) => {
  try {
    await BookService.removeBook(id);
    dispatch({
      type: REMOVE_BOOK,
      payload: { id },
    });
  } catch (err) {
    throw new Error(err);
  }
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_BOOKS:
      return payload;
    case ADD_BOOK:
      return { ...state, ...payload };
    case REMOVE_BOOK:
      // eslint-disable-next-line max-len
      return Object.fromEntries(Object.entries(state).filter((book) => book[0] !== payload.id));
    default:
      return state;
  }
};

export default reducer;
