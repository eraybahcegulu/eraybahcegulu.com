import Main from "./components/main/Main.jsx";
import ReactGA from 'react-ga';

function initalGA(){
  ReactGA.initialize('UA-282892030-1');
  ReactGA.pageview('homePage')
}

function App() {
  initalGA()
  return (
    <div>
      <Main></Main>
    </div>

  );
}

export default App;
