//react imports
import React, { Component } from 'react';

//component imports
import Button from '../components/Button.jsx';

export default class Splash extends Component {
  render() {
    return (
      <section id="splash">
        <div className="wrapper">
          <p className="sub-heading">The Diamondback Presents...</p>
          <h1 className="heading">Senior Edition</h1>
          <p className="blurb">
            It's been quite a ride for the University of Maryland's class of
            2018. The Diamondback's Senior Sendoff aims to capture seniors'
            experiences at this university since their freshman year, looking at
            restaurants, clubs, construction and more in a reflection of the
            last four years.
          </p>
          <Button to={'#stories'} style={'animated infinite pulse'}>
            View Stories
          </Button>
        </div>
      </section>
    );
  }
}
