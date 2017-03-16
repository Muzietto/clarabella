import React, {Component, PropTypes} from 'react';
import Header from '../common/Header';

// renders the Header component and other ones
// App component is the parent component of our app. Every other component is a child to it. this.props.children is where other child components are rendered.
class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
}

export default App;