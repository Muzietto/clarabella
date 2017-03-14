/*
- both a presentational component and a container
- technically we could split it into two components but it might be too early at this stage
- subscribes to the Redux store (maybe better 'connects'???)
- renders:
    + an input
    + and "add todo" button, that dispatches an ADD_TODO action on click
*/
// first two imports reveal the dual nature
import React from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'

let AddTodoRenderer = ({dispatch}) => {
  let input
  return (
    <div>
      <form onSubmit={ev => {
        ev.preventDefault()
        if (!input.value.trim()) return
        dispatch(ActionCreators.addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => { input = node }}/>
        <button type="submit">Add Todo</button>
      </form>        
    </div>
  )
}

const AddTodo = connect(/*mapStateToProps,mapDispatchToProps*/)(AddTodoRenderer)

export default AddTodo