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
      </tr>
    </thead>
    <tbody>
      <div>{books}</div>
      <Book />
    </tbody>
  </table>
);

BookList.propTypes = {
  books: PropTypes.instanceOf(Array),
};

BookList.defaultProps = {
  books: [],
};

const mapStateToProps = state => {
  return{
    books:state.books
  };
};

export default connect(mapStateToProps)(BookList);
