import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { getMovies } from './api/requests'

const movies = getMovies()
movies.then(data => console.log(data.results))

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);


