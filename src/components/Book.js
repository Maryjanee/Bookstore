import PropTypes from 'prop-types';

const Book = props => {
  const { bookId, bookTitle, bookCategory } = props;

  return (
    <tr>
      <td>{bookId}</td>
      <td>{bookTitle}</td>
      <td>{bookCategory}</td>
      <td><button type="button">Remove Book</button></td>
    </tr>
  );
};

Book.propTypes = {
  bookId: PropTypes.number,
  bookTitle: PropTypes.string,
  bookCategory: PropTypes.string,
};

Book.defaultProps = {
  bookId: null,
  bookTitle: null,
  bookCategory: null,
};

export default Book;
