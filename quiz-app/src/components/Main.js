import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import Quiz from './Quiz';
import Modal from './Modal';
import Results from './Results';
import randomQuestions from './helpers/random-questions';
import QUESTION_DATA from './quiz-data';

class Main extends Component {
    state = {
        ...this.getInitialState(this.props.totalQuestions)
    };

    static propTypes = {
        totalQuestions: PropTypes.number.isRequired
    };

    getInitialState(totalQuestions) {
        totalQuestions = Math.min(totalQuestions, QUESTION_DATA.length);
        const QUESTIONS = randomQuestions(QUESTION_DATA).slice(0, totalQuestions);

        return {
            questions: QUESTIONS,
            totalQuestions: totalQuestions,
            userAnswers: QUESTIONS.map(() => {
                return {
                    time: 0
                }
            }),
            step: 1,
            score: 0,
            modal: {
                state: 'hide',
                praise: '',
                points: ''
            }
        };
    }

    handleAnswerClick = (index) => (e) => {
        const {questions, step, userAnswers} = this.state;
        const isCorrect = questions[0].correct === index;
        const currentStep = step - 1;
        const time = userAnswers[currentStep].time;

        if (isCorrect && e.target.nodeName === 'LI') {

            e.target.parentNode.style.pointerEvents = 'none';

            e.target.classList.add('right');

            userAnswers[currentStep] = {
                time: time + 1
            };

            this.setState({
                userAnswers: userAnswers
            });


            setTimeout(this.nextStep, 1000);
        } else if (e.target.nodeName === 'LI') {
            e.target.style.pointerEvents = 'none';
            e.target.classList.add('wrong');

            userAnswers[currentStep] = {
                time: time + 1
            };

            this.setState({
                userAnswers: userAnswers
            });
        }
    };

    handleEnterPress = (index) => (e) => {
        if (e.keyCode === 13) {
            this.handleAnswerClick(index)(e);
        }
    };


    nextStep = () => {
        const {questions, userAnswers, step, score} = this.state;
        const restOfQuestions = questions.slice(1);
        const currentStep = step - 1;
        const time = userAnswers[currentStep].time;

        this.setState({
            step: step + 1,
            score: this.updateScore(time, score),
            questions: restOfQuestions,
            modal: {
                state: 'hide'
            }
        });
    };

    updateScore(time, score) {
        switch (time) {
            default:
                return score + 1;
        }
    }

    restartQuiz = () => {
        this.setState({
            ...this.getInitialState(this.props.totalQuestions)
        });
    };

    render() {
        const {step, questions, userAnswers, totalQuestions, score, modal} = this.state;

        if (step >= totalQuestions + 1) {
            return (
                <Results
                    score={score}
                    restartQuiz={this.restartQuiz}
                    userAnswers={userAnswers}
                />
            );
        } else return (
            <Fragment>
                <Quiz
                    step={step}
                    questions={questions}
                    totalQuestions={totalQuestions}
                    score={score}
                    handleAnswerClick={this.handleAnswerClick}
                    handleEnterPress={this.handleEnterPress}
                    restartQuiz={this.restartQuiz}
                />
                {modal.state === 'show' && <Modal modal={modal}/>}
            </Fragment>
        );
    }
}

export default Main;
