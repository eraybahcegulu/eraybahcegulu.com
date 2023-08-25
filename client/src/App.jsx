import Main from "./components/main/Main.jsx";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

function App() {

  useEffect(() =>{
    ReactGA.initialize('UA-282892030-1');
    ReactGA.pageview('/app');
  },[])

  return (
    <div>
      <Main></Main>
    </div>

  );
}

export default App;
