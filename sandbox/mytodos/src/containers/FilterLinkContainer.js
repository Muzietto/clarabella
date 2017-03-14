/*
- embeds the presentational FilterLink component
- subscribes to the Redux store (to be verified)
- renders a FilterLink that dispatches an appropriate action on click (WTF?!?!?!?!?!?)
- owns one of the available VisibilityFilters (ownProps.filter): this is a tiny amount of own state
*/
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
// default export does not require {}
import FilterLink from '../components/FilterLink'

// proprietary name - ownProps are defined in the markup (FilterArea.js)
const mapStateToProps = (state, ownProps) => {
  return { // see param active @FilterLink.js
    active: ownProps.filter === state.visibilityFilter
  }
}

// proprietary name - ownProps are defined in the markup (FilterArea.js)
const mapDispatchToProps = (dispatch, ownProps) => {
  return { // see param onClick @FilterLink.js
    onClick: () => dispatch(ActionCreators.setVisibilityFilter(ownProps.filter)),
  }
}

const FilterLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink)

export default FilterLinkContainer