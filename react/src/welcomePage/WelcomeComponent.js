import React from 'react';
import { browserHistory, Link } from 'react-router'

const WelcomeComponent = (props) => (
  <div>
    <div className="choices">
      <Link to='/toppings/new'>
        <div className="need-movie">
          <div className="substance-wrapper">
            Find me a movie
            <br/>
            based on my toppings
            <br/>
            <img src='https://s3.us-east-2.amazonaws.com/friday-movie-night-images/icons8-film-reel-filled-100.png'
                 alt="film reel"
                 height="150"
                 width="150"
            />
          </div>
        </div>
      </Link>
      <Link to='/movies/new'>
        <div className="need-pizza">
          <div className="substance-wrapper">
            Find me pizza toppings
            <br/>
            based on a movie
            <br/>
            <img src='https://s3.us-east-2.amazonaws.com/friday-movie-night-images/pizza-slice-combo-clipart.png'
                 alt="pizza"
                 height="150"
                 width="150"
            />
          </div>
        </div>
      </Link>
    </div>
  </div>
)

export default WelcomeComponent
