/* eslint-disable  no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BookReducer from './reducers/book';
import generateID from './helpers/generateID';

const initialState = {
  books: [
    {
      id: generateID(),
      title: 'Learn Redux',
      category: 'Learning',
    },
    {
      id: generateID(),
      title: 'Simbi Goes to School',
      category: 'Kids',
    },
    {
      id: generateID(),
      title: 'The man at the top',
      category: 'Horror',
    },
  ],
};

const store = createStore(BookReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
