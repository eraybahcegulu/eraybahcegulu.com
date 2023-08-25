import Main from "./components/main/Main.jsx";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

function App() {

  ReactGA.initialize([
    {
      trackingId: "UA-282892030-1",
    },
  ]);

  ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });
  
  return (
    <div>
      <Main></Main>
    </div>

  );
}

export default App;
