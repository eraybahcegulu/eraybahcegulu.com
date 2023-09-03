import Main from "./components/Main.jsx";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga4';

window.onbeforeunload = function () {
  window.scrollTo(0,0);
};
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
