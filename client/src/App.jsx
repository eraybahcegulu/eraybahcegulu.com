import Main from "./components/main/Main.jsx";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

function App() {

  const TRACKING_ID = 'UA-282892030-1';
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({ hitType: "pageview", page: "/"});

  return (
    <div>
      <Main></Main>
    </div>

  );
}

export default App;
