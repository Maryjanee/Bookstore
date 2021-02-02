/* eslint-disable import/extensions */

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';
import generateId from '../helpers/generateID';

const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BookForm = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', category: '' });

  const handleChange = event => {
    const { id, value } = event.target;
    setBook(prevBook => ({ ...prevBook, [id]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newBook = { ...book, id: generateId() };

    dispatch(createBook(newBook));
    setBook({ title: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">
          Book Title
          <input onChange={handleChange} type="text" id="title" name="title" />
        </label>
      </div>
      <div>
        <label htmlFor="booksCategory">
          Select a category
          <select onChange={handleChange} name="category" id="category">
            <option value="">Please select a category</option>
            {bookCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
