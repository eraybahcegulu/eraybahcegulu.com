
import HomePage from "./Pages/HomePage.jsx"
import PrivacyPage from "./Pages/PrivacyPage.jsx";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/privacy-for-android-apps" exact component={PrivacyPage} />
      </Switch>
    </Router>
  );
}

export default App;
