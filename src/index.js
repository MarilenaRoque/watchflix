import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { getAll } from './api/requests'

const movies = getAll()
movies.then(data => console.log(data.results))

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);


