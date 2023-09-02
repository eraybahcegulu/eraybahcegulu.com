import Main from "./components/main/Main.jsx";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga4';


function App() {

  ReactGA.initialize("G-5N3FNKYL58");


  ReactGA.send({ hitType: "pageview", page: "/my-path" });
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </Router>

  );
}

export default App;
