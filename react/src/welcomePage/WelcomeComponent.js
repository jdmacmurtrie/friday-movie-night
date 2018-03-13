import React from 'react';
import { browserHistory, Link } from 'react-router'

const WelcomeComponent = (props) => {
  return(
    <div>
      <div className="choices">
        <Link to='/toppings/new'>
          <div className="need-movie">
            <div className="substance-wrapper">
            Find me a movie
            <br/>
            based on my pizza
            <br/>
            <img src='/assets/icons8-film-reel-filled-100' alt="film reel" height="150" width="150"/>
          </div>
          </div>
        </Link>
        <Link to='/movies/new'>
          <div className="need-pizza">
          <div className="substance-wrapper">
            Find me a pizza
            <br/>
            based on a movie
            <br/>
            <img src='/assets/pizza-slice-combo-clipart' alt="pizza" height="150" width="150"/>
          </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default WelcomeComponent
