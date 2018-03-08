import React from 'react';
import { browserHistory, Link } from 'react-router'
// import pizza from 'images/pizza'
// import film from 'images/film'

const WelcomeComponent = (props) => {
  return(
    <div>
      <div className="choices row">
        <Link to='/toppings/new'>
          <div className="need-movie">
            Find me a movie
            <br/>
            based on my pizza
            <br/>
            <img src='/assets/film' alt="film reel" height="150" width="150"/>
          </div>
        </Link>
        <Link to='/movies/new'>
          <div className="need-pizza">
            Find me a pizza
            <br/>
            based on a movie
            <br/>
            <img src='/assets/pizza' alt="pizza" height="150" width="150"/>
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
