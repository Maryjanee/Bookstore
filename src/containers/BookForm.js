/* eslint-disable import/extensions */
const BookForm = () => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <div>
        <label htmlFor="title">
          Book Title
          <input type="text" id="book" name="book" />
        </label>
      </div>
      <div>
        <label htmlFor="booksCategory">
          Select a category
          <select name="category" id="category">
            {bookCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
