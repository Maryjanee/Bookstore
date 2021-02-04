import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeFilter, removeBook } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({
  books, filter, handleRemoveBook, handleFilterChange,
}) => {
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleFilter = category => {
    handleFilterChange(category);
  };
  useEffect(() => {
    const filtered = filter
      ? books.filter(book => book.category === filter)
      : books;
    setFilteredBooks(filtered);
  }, [books, filter]);

  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilter} />
      <div>
        {filteredBooks.map(book => (
          <Book
            key={book.id}
            bookId={book.id}
            bookCategory={book.category}
            bookTitle={book.title}
            removeBook={handleRemoveBook}
          />
        ))}
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.instanceOf(Array),
  filter: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

BookList.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({
  books: state.bookReducer.books,
  filter: state.filterReducer.filter,
});

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: bookId => dispatch(removeBook(bookId)),
  handleFilterChange: category => dispatch(changeFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
