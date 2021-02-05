import { CHANGE_FILTER } from '../constants';

const initialState = { filter: '' };

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
