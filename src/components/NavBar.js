import user from '../assets/user.svg';
import '../styles/NavBar.css';

const NavBar = () => (
  <header>
    <div className="d-flex container">
      <div className="d-flex">
        <h1>BookStore CMS</h1>
        <ul className="d-flex">
          <li>Book</li>
          <li>Categories</li>
        </ul>
      </div>
      <img src={user} alt="user" />
    </div>

  </header>
);

export default NavBar;
