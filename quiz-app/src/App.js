import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import { BrowserRouter as Router} from "react-router-dom";

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
