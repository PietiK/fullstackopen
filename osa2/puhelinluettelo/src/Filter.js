import React from 'react'
const Filter = ({personFilter, handleFilterChange}) => {
	return(
    <div>Filter people <input value={personFilter} onChange={handleFilterChange} /></div>
    )
  }
export default Filter