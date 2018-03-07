import React from 'react';
import { browserHistory, Link } from 'react-router'

const WelcomeComponent = (props) => {
  return(
    <div className="choice-panal">
      <div className="choice">
        What would you like me to recommend?
      </div>
      <div className="choice-buttons row">
        <div className="small-6 columns">
          <Link to='/toppings/new' className="small-12 columns button">
            Recommend a movie based on my pizza
          </Link>
        </div>
        <div className="small-6 columns">
          <Link to='/movies/new' className="small-12 columns button">
            Recommend a pizza based on a movie
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WelcomeComponent
