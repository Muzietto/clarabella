// my main APP
import { createStore } from 'redux'
import todoApp from './reducers'
import { VisibilityFilters, ActionTypes, ActionCreators } from './actions'

let store = createStore(todoApp/*, initialStateFromServer*/)
