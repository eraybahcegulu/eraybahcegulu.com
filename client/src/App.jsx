import Main from "./components/main/Main.jsx";
import ReactGA from 'react-ga4';

function App() {

  ReactGA.initialize("G-RC66N4F76Z");


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
