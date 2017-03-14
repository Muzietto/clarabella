// these are all the ACTIONS

// nothing to import
let nextTodoId = 0 // closing in...

// action types
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}

export const ActionTypes = {
  ADD_TODO: ADD_TODO,
  TOGGLE_TODO: TOGGLE_TODO,
  SET_VISIBILITY_FILTER: SET_VISIBILITY_FILTER,
}

// actually these funs are ACTION CREATORS
export const addTodo = text => { 
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text: text
  }
}

export const toggleTodo = id => { 
  return {
    type: TOGGLE_TODO,
    id
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export const ActionCreators = {
  addTodo: addTodo,
  toggleTodo: toggleTodo,
  setVisibilityFilter: setVisibilityFilter,
}
