/* eslint-disable import/extensions */

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';
import generateId from '../helpers/generateID';
import '../styles/BookForm.css';

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
    <div>
      <h4 className="uppercase">Add a new Book</h4>
      <form onSubmit={handleSubmit} className="d-grid">
        <div>
          <input onChange={handleChange} type="text" id="title" name="title" placeholder="Book Title" />
        </div>
        <div>
          <select onChange={handleChange} name="category" id="category">
            <option value="">Category</option>
            {bookCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <button type="submit" id="createbook" className="uppercase">Add Book</button>
      </form>
    </div>

  );
};

export default BookForm;
