/*
  presentational component(*)
  allows user interaction to select one of the three visibility filters
- onClick()

(*) They describe the look but don't know where the data comes from, or how to change it. They only render what's given to them. If you migrate from Redux to something else, you'll be able to keep all these components exactly the same. They have no dependency on Redux.
*/
import React, { PropTypes } from 'react'

const FilterLink = ({active, children, onClick}) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a href="#"
       onClick={ev => {
         ev.preventDefault()
         onClick()
       }}
    >{children}</a>
  )
}

FilterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default FilterLink