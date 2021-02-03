import {CHANGE_FILTER } from '../constants';

const initialState = 'All';
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, books: state.books.filter(book => book.category === action.payload) };
    default:
      return state;
  }
};

export default filterReducer;
