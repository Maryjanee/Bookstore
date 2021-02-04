import PropTypes from 'prop-types';
import generateID from '../helpers/generateID';
import '../styles/App.css';
import '../styles/Book.css';

const Book = props => {
  const {
    bookId, bookTitle, bookCategory, removeBook,
  } = props;

  const handleRemoveBook = () => {
    removeBook(bookId);
  };

  return (
    <div className="bookcard d-flex">
      <div className="Book-info">
        <p className="category">{bookCategory}</p>
        <p className="title">{bookTitle}</p>
        <p className="author-name">Tom Baker</p>

        <div className="bookcard-btn">
          <button type="button" className="text-blue">Comment</button>
          <button type="button" className="text-blue" onClick={handleRemoveBook}>Remove Book</button>
          <button type="button" className="text-blue">Edit</button>

        </div>
      </div>

      <div className="progress-ring d-flex">

        <div className="ring">
          <div className="percent1">
            <svg>
              <circle cx="70" cy="70" r="70" />
              <circle cx="70" cy="70" r="70" />
            </svg>
          </div>
        </div>
        <p>
          {`${generateID()}%`}
          <br />
          completed
        </p>
      </div>

      <div className="chapter-deets">
        <p>Current Chapter </p>
        <p>
          Chapter
          <span>{generateID()}</span>
        </p>
        <button type="button" className="update uppercase">Update Progress</button>
      </div>

    </div>
  );
};

Book.propTypes = {
  bookId: PropTypes.number,
  bookTitle: PropTypes.string,
  bookCategory: PropTypes.string,
  removeBook: PropTypes.func,
};

Book.defaultProps = {
  bookId: null,
  bookTitle: null,
  bookCategory: null,
  removeBook: () => {},
};

export default Book;
