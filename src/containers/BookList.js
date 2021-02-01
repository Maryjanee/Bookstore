import Book from '../components/Book';

const BookList = () => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <Book />
    </tbody>
  </table>
);

export default BookList;
