import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Redirect_Page from './components/homepage/Redirect_Page';
import MainPage from './components/homepage/MainPage';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path='/api/user/:id'>
            <Redirect_Page />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
