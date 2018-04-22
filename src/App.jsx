//react imports
import React from 'react';

//google analytics
import Analytics from 'react-router-ga';

//style imports
import './style/normalize.min.css';
import './style/app.min.css';

//view imports
import Splash from './views/Splash.jsx';
import Stories from './views/Stories.jsx';

const App = () => {
  return (
    <div id="app-container">
      <Splash />
      <Stories />
    </div>
  );
};

export default App;
