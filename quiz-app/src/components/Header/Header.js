import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";

import './Header.css';
import Quiz from "../Quiz/Quiz";
import Welcome from "../Welcome/Welcome";

class Header extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <NavLink className="navbar-brand" to="/">Home</NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

              <li className="nav-item">
                <NavLink className="nav-link" to="quiz">Quize</NavLink>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Create</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>

            </ul>

            <ul className='navbar-nav'>
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Logout</a>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/quiz" component={Quiz} />
        </Switch>

      </Router>
    );
  };
};

export default Header;