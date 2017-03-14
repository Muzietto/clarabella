// my main APP
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { todoApp, initialState } from './reducers'
// default exports do not require {}
import App from './components/App'
//import { VisibilityFilters, ActionTypes, ActionCreators } from './actions'

let store = createStore(todoApp, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

/* teaching aid
console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState()));

store.dispatch(ActionCreators.addTodo('ciao mamma'))

store.dispatch(ActionCreators.setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

store.dispatch(ActionCreators.toggleTodo(0))

unsubscribe()
*/