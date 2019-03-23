import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Main from "./components/Main";




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main totalQuestions={3} />,
      </div>
    );
  }
}

export default App;
