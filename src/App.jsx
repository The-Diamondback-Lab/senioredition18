//react imports
import React from 'react';

//style imports
import './style/normalize.min.css';
import './style/app.min.css';

//view imports
import Splash from './views/Splash.jsx';
import Stories from './views/Stories.jsx';

//component imports
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div id="app-container">
      <Splash />
      <Stories />
      <Footer />
    </div>
  );
};

export default App;
