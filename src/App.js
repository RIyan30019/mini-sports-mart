import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import TeamDetails from './Components/TeamDetails/TeamDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';


function App() {

  return (

    <div>
      <Header></Header>
    
      <Router>
        <Switch>
          <Route path="/:idLeague">
            <TeamDetails> </TeamDetails>
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
