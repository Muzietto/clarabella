// my main APP
import { createStore } from 'redux'
import { todoApp, initialState } from './reducers'
import { VisibilityFilters, ActionTypes, ActionCreators } from './actions'

let store = createStore(todoApp, initialState)

console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState()));

store.dispatch(ActionCreators.addTodo('ciao mamma'))

store.dispatch(ActionCreators.setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

store.dispatch(ActionCreators.toggleTodo(0))

unsubscribe()