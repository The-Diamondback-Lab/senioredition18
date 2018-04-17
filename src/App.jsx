//react imports
import React, { Component } from 'react';

//react-router imports
import { BrowserRouter, Route } from 'react-router-dom';

//config imports
import * as routes from './config/routes.js';

//google analytics
import Analytics from 'react-router-ga';

//style imports
import './style/normalize.min.css';
import './style/app.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Analytics id="UA-116382668-1" debug>
          <div className="app-container">
            <p>
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </Analytics>
      </BrowserRouter>
    );
  }
}

export default App;
