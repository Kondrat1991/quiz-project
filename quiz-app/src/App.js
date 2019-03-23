import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";




class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
        <Header />

      </div>
        </Router>
    );
  }
}

export default App;
