import React from 'react';
import { browserHistory, Link } from 'react-router'

const WelcomeComponent = (props) => {
  return(
    <div>
      <div className="choices row">
        <Link to='/toppings/new'>
          <div className="need-movie small-6 columns">
            Recommend a movie
            <br/>
            based on my pizza
          </div>
        </Link>
        <Link to='/movies/new'>
          <div className="need-pizza small-6 columns">
            Recommend a pizza
            <br/>
            based on a movie
          </div>
        </Link>
      </div>
    </div>
  )
}

export default WelcomeComponent

// 
// <div className="top-bar get-started">
// <div>Friday Movie Night</div>
// </div>
