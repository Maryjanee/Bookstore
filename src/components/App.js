/* eslint-disable import/extensions */

import BookForm from '../containers/BookForm';
import BookList from '../containers/BookList';
import NavBar from './NavBar';
import '../styles/App.css';

const App = () => (
  <div>
    <NavBar />
    <BookList />
    <BookForm />
  </div>
);

export default App;
