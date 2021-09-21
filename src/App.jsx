import './css/App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Resume from './pages/resume/Resume';
import Portfolio from './pages/portfolio/Portfolio';

const App = _ => {

 

  return (
    <div className="App">
      <Router>
        <LanguageProvider>
          <Topbar/>
          <Switch>
              <Route exact path="/">
                <Home/> 
              </Route>
              <Route path="/resume">
                <Resume/>
              </Route>
              <Route path="/portfolio">
                <Portfolio/>
              </Route>
          </Switch>  
         </LanguageProvider> 
      </Router>
    </div>

  );
}

export default App;
