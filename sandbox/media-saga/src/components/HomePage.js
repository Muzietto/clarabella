import React from 'react';
import {Link} from 'react-router';

// welcome page with link to the library
const HomePage = () => {
  return (
    <div className="jumbotron center">
      <h1 className="lead">Welcome back my friends</h1>
      <div>
        <Link to="library">
          <button className="btn btn-lg btn-primary">
            Visit Library
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage;