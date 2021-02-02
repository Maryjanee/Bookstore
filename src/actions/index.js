 const CREATE_BOOK = book => ({
    type: CREATE_BOOK,
    payload: book,
  });
  
  const REMOVE_BOOK  = book => ({
    type: REMOVE_BOOK,
    payload: book.id,
  });

  export { CREATE_BOOK, REMOVE_BOOK };