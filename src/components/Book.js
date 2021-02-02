import PropTypes from 'prop-types';

const Book = props => {
  const {
    bookId, bookTitle, bookCategory, removeBook,
  } = props;

  const handleRemoveBook = () => {
    removeBook(bookId);
  };

  return (
    <tr>
      <td>{bookId}</td>
      <td>{bookTitle}</td>
      <td>{bookCategory}</td>
      <td>
        <button type="button" onClick={handleRemoveBook}>Remove Book</button>
      </td>
    </tr>
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
