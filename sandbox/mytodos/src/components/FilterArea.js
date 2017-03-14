/*
  presentational component (*)
  allows user interaction wrt filters
  
(*) They describe the look but don't know where the data comes from, or how to change it. They only render what's given to them. If you migrate from Redux to something else, you'll be able to keep all these components exactly the same. They have no dependency on Redux.
*/
// default exports do not require {}
import React, { PropTypes } from 'react'
import FilterLinkContainer from '../containers/FilterLinkContainer'

const FilterArea = function() {
  return (
    <ul>
      <li><FilterLinkContainer filter="SHOW_ALL">All</FilterLinkContainer></li>
      <li><FilterLinkContainer filter="SHOW_ACTIVE">Active</FilterLinkContainer></li>
      <li><FilterLinkContainer filter="SHOW_COMPLETED">Completed</FilterLinkContainer></li>
    </ul>
  )
}

export default FilterArea