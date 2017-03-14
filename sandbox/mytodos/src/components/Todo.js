/*
  presentational component (*)
- text
- completed
- onClick()

(*) They describe the look but don't know where the data comes from, or how to change it. They only render what's given to them. If you migrate from Redux to something else, you'll be able to keep all these components exactly the same. They have no dependency on Redux.
*/
// default exports do not require {}
import React, { PropTypes } from 'react'

const Todo = ({onClick, completed, text}) => {
  return (
    <li
      className="todo"
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >{text}</li>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo