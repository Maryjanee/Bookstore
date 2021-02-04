import PropTypes from 'prop-types';
import generateID from '../helpers/generateID';
import '../styles/Book.css';

const Book = props => {
  const {
    bookId, bookTitle, bookCategory, removeBook,
  } = props;

  const handleRemoveBook = () => {
    removeBook(bookId);
  };

  return (
    <div className="bookcard">
      <div className="Book-info">
        <p>{bookCategory}</p>
        <p>{bookTitle}</p>
        <p>Tom Baker</p>

        <div className="bookcard- btn">
          <button type="button">Comment</button>
          <button type="button" onClick={handleRemoveBook}>Remove Book</button>
          <button type="button">Edit</button>

        </div>
      </div>

      <div className="progress-ring">
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
        <button type="button">Update Progress</button>
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
