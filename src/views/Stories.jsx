//react imports
import React, { Component } from 'react';

//data imports
import stories from '../data/stories.json';

//images imports
import img1 from '../assets/img/ads/BSOS-Commencement-300x250.gif';
import img2 from '../assets/img/ads/Clark-Schools-Graduating-300x250.gif';
import img3 from '../assets/img/ads/Dean-Mullins-10.25x10.jpg';
import img4 from '../assets/img/ads/DMGS-Graduating-Seniors-300x250.jpg';
import img5 from '../assets/img/ads/Fearless Seniors 2.gif';
import img6 from '../assets/img/ads/Fearless-Seniors-300x250.jpg';
import img7 from '../assets/img/ads/Geographical-Science-Grad-300x250.gif';
import img8 from '../assets/img/ads/Self-Storage-300x250.gif';
import img9 from '../assets/img/ads/UMD-Econ-Seniors-300x250.gif';
import img10 from '../assets/img/ads/UMD-Psych-Seniors-300x250.gif';

//component imports
import StoryBlock from '../components/StoryBlock.jsx';

export default class Stories extends Component {
  render() {
    return (
      <section id="stories">
        <div className="wrapper" id="stories-wrapper">
          <div className="ad-container">
            <img className="ad-img" src={img1} alt="" />
            <img className="ad-img" src={img2} alt="" />
            <img className="ad-img" src={img3} alt="" />
            <img className="ad-img" src={img4} alt="" />
            <img className="ad-img" src={img5} alt="" />
          </div>

          <div className="story-block-container">
            <h2>Senior Stories</h2>
            {stories.map((story, i) => {
              return <StoryBlock story={story} id={i} key={i} />;
            })}
          </div>

          <div className="ad-container">
            <img className="ad-img" src={img6} alt="" />
            <img className="ad-img" src={img7} alt="" />
            <img className="ad-img" src={img8} alt="" />
            <img className="ad-img" src={img9} alt="" />
            <img className="ad-img" src={img10} alt="" />
          </div>
        </div>
      </section>
    );
  }
}
