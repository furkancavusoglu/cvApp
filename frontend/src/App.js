import './App.css';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Admin from './pages/Admin';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/user" component={User} />
            <Redirect to="/login" />
          </Switch>
        </Router>
    </div>
  );
}

export default App;

//{!isLoggedIn && <Route path="/login" component={LoginPage} />}
//<Route path="/user/:username" component={UserPage} />