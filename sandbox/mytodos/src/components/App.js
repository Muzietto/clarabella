/*
  root presentational component(*)

(*) They describe the look but don't know where the data comes from, or how to change it. They only render what's given to them. If you migrate from Redux to something else, you'll be able to keep all these components exactly the same. They have no dependency on Redux.
*/
// default exports do not require {}
import React, { PropTypes } from 'react'
import AddTodo from './AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import FilterArea from './FilterArea'

const App = function() {
  // <VisibleTodoList/> embeds TodoList component
  return (
    <div>
      <AddTodo/>
      <VisibleTodoList/>
      <FilterArea/>
    </div>
  )
}

export default App