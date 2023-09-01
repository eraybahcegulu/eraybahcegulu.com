import Main from "./components/main/Main.jsx";
import Test from "./components/main/Test.jsx";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga4';


function App() {

  ReactGA.initialize("G-5N3FNKYL58");


  ReactGA.send({ 
    hitType: "pageview", 
    page: window.location.pathname,
  });
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/test" exact component={Test} />
      </Switch>
    </Router>

  );
}

export default App;
