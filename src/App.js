import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';
import { Login } from "./Login/Login";

export const App = () => {
  const userType ="GUEST";
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {
              userType==="GUEST" &&  <li>
              <Link to="/users">Users</Link>
            </li>
            }
           
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          {
              userType==="GUEST " &&   <Route path="/users">
              <Users />
            </Route>
}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}


const  Home = ()=> {
  return <div>
    <Login/>
  </div>;
}

const  About = ()=> {
  return <h2>About</h2>;
}

const  Users = ()=> {
  return <h2>Users</h2>;
}
