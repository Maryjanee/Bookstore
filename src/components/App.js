/* eslint-disable import/extensions */

import BookForm from '../containers/BookForm';
import BookList from '../containers/BookList';
import NavBar from './NavBar';
import '../styles/App.css';

const App = () => (
  <>
    <NavBar />
    <div className="container">
      <BookList />
      <BookForm />
    </div>

  </>
);

export default App;
