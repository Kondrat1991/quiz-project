import React, {Component} from 'react';
import './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome jumbotron-fluid text-center">
        <div className='container'>
          <h1 className="display-4">Welcome to Quiz User Name</h1>
          <h2>This app will help you learn Front-End Technology</h2>
          <p className="lead">Feel free to go ahead and <a href='/'>take the Quiz</a> to test your skills. Comming soon you can create your own quizzes on any topic! Enjoy!</p>
        </div>
      </div>
    );
  }
}

export default Welcome;