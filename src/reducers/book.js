import { CREATE_BOOK, REMOVE_BOOK } from '../constants';
import generateID from '../helpers/generateID';

const initialState = {
  books: [
    {
      id: generateID(),
      title: 'Learn Redux',
      category: 'Learning',
    },
    {
      id: generateID(),
      title: 'Simbi Goes to School',
      category: 'Kids',
    },
    {
      id: generateID(),
      title: 'The man at the top',
      category: 'Horror',
    },
  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return { ...state, books: state.books.filter(book => book.id !== action.payload) };
    default:
      return state;
  }
};

export default bookReducer;
