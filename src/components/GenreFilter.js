import React from 'react'
import { genresMap } from '../constants'
import store from '../redux/store';
// import PropTypes from 'prop-types'

const GenreFilter = ({ changeFilter }) => {
    console.log(store.getState())
    return (
        <div>
            <select
        name="filter"
        id="filter"
        onChange={e => {
            changeFilter(e.target.value)
        }}
        >
        <option key="All" value={"All"}>All</option>
        {Object.keys(genresMap).map(item => <option key={item} value={genresMap[item]}>{genresMap[item]}</option>)}
      </select>
        </div>
    )
}


// GenreFilter.propTypes = {

// }

export default GenreFilter