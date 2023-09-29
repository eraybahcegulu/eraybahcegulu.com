import Main from "./components/Main.jsx";
import Privacy from "./components/Privacy.jsx";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/privacy-for-apps1" exact component={Privacy} />
      </Switch>
    </Router>
  );
}

export default App;
