
import HomePage from "./Pages/HomePage.jsx"
import YemekTarifleri from "./Pages/YemekTarifleri.jsx";
import HesapMakinesi from "./Pages/HesapMakinesi.jsx";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/yemek-tarifleri-app-privacy" exact component={YemekTarifleri} />
        <Route path="/hesap-makinesi-app-privacy" exact component={HesapMakinesi} />
      </Switch>
    </Router>
  );
}

export default App;
