import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { getMovies } from './api/requests'
import { Provider } from 'react-redux'
import store from './redux/store'

const movies = getMovies()
movies.then(data => console.log(data.results))

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);


