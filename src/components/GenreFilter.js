import React from 'react'
import { genresMap } from '../constants'
// import PropTypes from 'prop-types'

const GenreFilter = props => {
    return (
        <div>
            <select
        name="filter"
        id="filter"
        onChange={e => console.log(e.target.value)}
        >
        <option key="all" value={9999}>All</option>
        {Object.keys(genresMap).map(item => <option key={item} value={item}>{genresMap[item]}</option>)}
      </select>
        </div>
    )
}

// GenreFilter.propTypes = {

// }

export default GenreFilter
