import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Book from '../components/Book';

const BookList = ({ books }) => (
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
        />
      ))}
    </tbody>
  </table>
);

BookList.propTypes = {
  books: PropTypes.instanceOf(Array),
};

BookList.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({
  books: state.bookReducer.books,
});

export default connect(mapStateToProps)(BookList);
