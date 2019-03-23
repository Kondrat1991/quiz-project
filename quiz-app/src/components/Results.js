import React from 'react';
import PropTypes from 'prop-types';
import total from './helpers/total';

const Results = ({ userAnswers, score, restartQuiz }) => {
    const triesTotal = total(userAnswers);
    const oneTry = triesTotal[1] && <div><strong>{triesTotal[1]}</strong> 1 </div>;
    const twoTries = triesTotal[2] && <div><strong>{triesTotal[2]}</strong> 2</div>;
    const threeTries = triesTotal[3] && <div><strong>{triesTotal[3]}</strong>3</div>;
    const fourTries = triesTotal[4] && <div><strong>{triesTotal[4]}</strong> 4</div>;

    return (
        <div className="results-container">
            <h2>results</h2>
            {oneTry}
            {twoTries}
            {threeTries}
            {fourTries}
            <div className="results-total">Your Total Score is <strong>{score}</strong>.</div>
            <a onClick={restartQuiz}>Restart Quiz</a>
        </div>
    );
};

Results.propTypes = {
    userAnswers: PropTypes.array.isRequired,
    score: PropTypes.number.isRequired,
    restartQuiz: PropTypes.func.isRequired
};

export default Results;
