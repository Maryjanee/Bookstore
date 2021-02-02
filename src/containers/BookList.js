import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions';
import Book from '../components/Book';

const BookList = ({ books, handleRemoveBook }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
        <th>Remove Book</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => (
        <Book
          key={book.id}
          bookId={book.id}
          bookCategory={book.category}
          bookTitle={book.title}
          removeBook={handleRemoveBook}
        />
      ))}
    </tbody>
  </table>
);

BookList.propTypes = {
  books: PropTypes.instanceOf(Array),
  handleRemoveBook: PropTypes.func.isRequired,
};

BookList.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({
  books: state.bookReducer.books,
});

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: bookId => dispatch(removeBook(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
