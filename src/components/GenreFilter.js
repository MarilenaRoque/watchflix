import React from 'react';
import PropTypes from 'prop-types';
import { genresMap } from '../constants';
import Styles from '../assets/stylesheets/GenreFilter.module.css';

const GenreFilter = ({ changeFilter }) => {
  const mapping = item => <option key={item} value={genresMap[item]}>{genresMap[item]}</option>;
  return (
    <div className={Styles.select}>
      <select
        className={Styles.input}
        name="filter"
        id="filter"
        onChange={e => {
          changeFilter(e.target.value);
        }}
      >
        <option key="All" value="All">All</option>
        {Object.keys(genresMap).map(mapping)}
      </select>
    </div>
  );
};

GenreFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default GenreFilter;
