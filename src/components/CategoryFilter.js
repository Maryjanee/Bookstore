// import PropTypes from 'prop-types';
/* eslint-disable react/jsx-no-duplicate-props */

import PropTypes from 'prop-types';

const bookCategories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const CategoryFilter = ({ handleFilterChange }) => {
  const handleChange = event => {
    const { value } = event.target;
    handleFilterChange(value);
  };

  return (
    <div className="mt-1">
      <label htmlFor="booksCategory">
        Select a category
        <select
          name="categoryFilter"
          id="categoryFilter"
          name="category"
          id="category"
          onChange={handleChange}
        >
          <option value="">All</option>
          {bookCategories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default (CategoryFilter);
