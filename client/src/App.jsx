import Main from "./components/main/Main.jsx";
import React from 'react';
import ReactGA from 'react-ga4';

function App() {

  ReactGA.initialize("G-5N3FNKYL58");


  ReactGA.send({ 
    hitType: "pageview", 
    page: window.location.pathname,
  });
  
  return (
    <div>
      <Main></Main>
    </div>

  );
}

export default App;
