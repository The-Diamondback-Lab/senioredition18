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

    var ads1 = (<div className="ad-container">
                  <a className="ad-img" href="http://bsos.umd.edu" target="_blank"><img src={img1} alt="" /></a>
                  <a className="ad-img"  href="https://eng.umd.edu" target="_blank"><img src={img2} alt="" /></a>
                  <a className="ad-img"  href="https://www.rhsmith.umd.edu" target="_blank"><img src={img3} alt="" /></a>
                  <a className="ad-img"  href="https://dmgs.org/" target="_blank"><img src={img4} alt="" /></a>
                  <a className="ad-img"  href="http://go.umd.edu/seniors" target="_blank"><img src={img5} alt="" /></a>
                </div>);

    var ads2 = (<div className="ad-container">
                  <a className="ad-img" href="http://go.umd.edu/seniors" target="_blank"><img src={img6} alt="" /></a>
                  <a className="ad-img"  href="https://geog.umd.edu/landing/Graduate" target="_blank"><img src={img7} alt="" /></a>
                  <a className="ad-img"  href="http://www.selfstorageplus.com/self_storage/silver_spring_md/zip_20904/self_storage_plus/5157" target="_blank"><img src={img8} alt="" /></a>
                  <a className="ad-img"  href="http://www.masters.econ.umd.edu" target="_blank"><img src={img9} alt="" /></a>
                  <a className="ad-img"  href="http://psyc.umd.edu/graduate/mps-clinical-psychological-science" target="_blank"><img src={img10} alt="" /></a>
                </div>);

    if (Math.round(Math.random()) == 1){
      var temp = ads1;
      ads1 = ads2;
      ads2 = temp;
    }



    return (
      <section id="stories">
        <div className="wrapper" id="stories-wrapper">
          {ads1}

          <div className="story-block-container">
            <h2>Senior Stories</h2>
            {stories.map((story, i) => {
              return <StoryBlock story={story} id={i} key={i} />;
            })}
          </div>

          {ads2}
        </div>
      </section>
    );
  }
}
