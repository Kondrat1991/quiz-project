import React, {Component} from 'react';
import {Link, Router, Route} from 'react-router-dom';
import './QuizList.css';
import Main from "../Main";

class QuizList extends Component {

  render() {
    return (
      <div className="quizeList jumbotron-fluid text-center">
        <div className='container'>
          <h1 className="display-4">Select a Quiz to Study</h1>
          <h2>All the quizzes uploaded by users are available here:</h2>
          <select className="custom-select quiz-field">
            <option value="0">Java Script</option>
            <option value="1">React</option>
            <option value="2">HTML</option>
          </select>
          <p>This quiz has a total of 10 questions</p>

          <button onClick={this.onButtonClick} type="button" className="btn quiz-btn">Start Quize</button>
        </div>
      </div>
    );
  };
};

export default QuizList;