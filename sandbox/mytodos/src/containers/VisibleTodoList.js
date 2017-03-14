/*
- aids the presentational TodoList component
- subscribes to the Redux store (maybe better 'connects'???)
- knows how to apply the current visibility filter
*/
import { connect } from 'react-redux'
import { VisibilityFilters, ActionCreators } from '../actions'
// default export does not require {}
import TodoList from '../components/TodoList'

// how should I know that here will arrive TWO distinct params? - see @line 29
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL: {
      return todos
    }
    case VisibilityFilters.SHOW_COMPLETED: {
      return todos.filter(todo => todo.completed)
    }
    case VisibilityFilters.SHOW_ACTIVE: {
      return todos.filter(todo => !todo.completed)
    }
  }
}

// proprietary name
const mapStateToProps = (state/*, ownProps*/) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter) // HERE'S WHY!!!
  }
}

// proprietary name - which props are we talking about?!?
// onTodoClick mentioned also in TodoList
const mapDispatchToProps = (dispatch/*, ownProps*/) => {
  return {
    onTodoClick: (id) => dispatch(ActionCreators.toggleTodo(id))
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList