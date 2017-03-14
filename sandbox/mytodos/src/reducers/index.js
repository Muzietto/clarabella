// this is for REDUCERS
import { VisibilityFilters, ActionTypes } from '../actions'

export const initialState = {
  todos: [],
  visibilityFilter: VisibilityFilters.SHOW_ALL,
}

// TODO - create declarative handlers and use combineReducers
export function todoApp(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  let newState = Object.assign({}, state)
  switch (action.type) {
    case ActionTypes.SET_VISIBILITY_FILTER: {
      newState.visibilityFilter = action.filter
      break
    }
    case ActionTypes.ADD_TODO:
    case ActionTypes.TOGGLE_TODO: {
      newState.todos = handleTodos(newState.todos, action)
      break
    }
    default: {
      break
    }
  }
  return newState
}

export function handleTodos(todos, action) {

  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      todos.push({
        id: action.id,
        test: action.text,
        completed: false
      })
      break
    }
    case ActionTypes.TOGGLE_TODO: {
      let todo = todos.find(td => td.id === action.id)
      todo.completed = !todo.completed
      break
    }
    default: {
      break
    }
  }
  return todos  
}