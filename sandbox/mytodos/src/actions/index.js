// these are all the ACTIONS

// nothing to import
let nextTodoId = 0 // closing in...

// action types
let ADD_TODO = 'ADD_TODO'
let TOGGLE_TODO = 'TOGGLE_TODO'
let SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

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
let addTodo = text => { 
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text: text
  }
}

let toggleTodo = id => { 
  return {
    type: TOGGLE_TODO,
    id
  }
}

let setVisibilityFilter = filter => {
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
