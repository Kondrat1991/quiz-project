import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';


const Quiz = ({ step, questions, totalQuestions, score, handleAnswerClick, handleEnterPress, onItemClick, restartQuiz }) => {
    return (
        <div className="wrapper">
            <header>
                <div className="question-count">
                    <h2>User</h2>

                </div>
                <h1>Діадіжба</h1>
                <div className="score-container">
                    <h2>Test Name</h2>
                </div>

            </header>

            <div className="questions">
                <QuestionList
                    questions={questions}
                    handleAnswerClick={handleAnswerClick}
                    handleEnterPress={handleEnterPress}
                />
            </div>

            <div className="footer">
                <div className="question-count">
                    <h2>Question</h2>
                    <div className="question-number">{step}</div>
                    <div className="description">of <span>{totalQuestions}</span></div>
                </div>

                <button className="Reset" onClick={restartQuiz}><a href=""> <h2>RESET TEST</h2></a></button>

                <div className="score-container">
                    <h2>Score</h2>
                    <div className="score">{score}</div>
                    <div className="description">points</div>
                </div>

            </div>
        </div>
    );
}

Quiz.propTypes = {
    step: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    handleAnswerClick: PropTypes.func.isRequired,
    handleEnterPress: PropTypes.func.isRequired
};

export default Quiz;
