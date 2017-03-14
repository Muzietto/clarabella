/*
  presentational component (*)
- todos [...{id,text,completed}]
- onTodoClick(id)

(*) They describe the look but don't know where the data comes from, or how to change it. They only render what's given to them. If you migrate from Redux to something else, you'll be able to keep all these components exactly the same. They have no dependency on Redux.
*/
// default exports do not require {}
import React, { PropTypes } from 'react'
import Todo from './Todo'

// onTodoClick mentioned also in VisibleTodoList
//const TodoList = function(todos, onTodoClick) { // trying to follow the book
// const TodoList = function(xxx) { // using the only param sent here (gotta use it inside the function body)
const TodoList = ({todos, onTodoClick}) => {
  return (
    <ul>
      {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
      )}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList