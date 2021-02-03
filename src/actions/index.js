import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from '../constants';

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBook = bookId => ({
  type: REMOVE_BOOK,
  payload: bookId,
});

export const changeFilter = category => ({
  type: CHANGE_FILTER,
  payload: category,
});
