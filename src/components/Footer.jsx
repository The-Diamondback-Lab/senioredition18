//react imports
import React, { Component } from 'react';

//dbk svg import
import dbk from '../assets/img/dbk.svg';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="wrapper" id="footer-wrapper">
          <a
            href="http://www.dbknews.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={dbk} alt="" />
          </a>
          <div className="addthis_sharing_toolbox" id="add-this" />
        </div>
      </footer>
    );
  }
}
