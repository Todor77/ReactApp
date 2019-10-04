import React from 'react';
import AnswerOption from '../fragenExample/AnswerOption';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types'


function Quiz(props) {

    return (
        <ReactCSSTransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimoeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
        >
            <div key={props.questionId}>
                <h2 className="question">{props.question}</h2>

                <ul className="answerOptions">
                    {props.answerOptions.map(key => {
                        return  <AnswerOption
                            key={key.content}
                            answerContent={key.content}
                            answerType={key.type}
                            answer={props.answer}
                            questionId={props.questionId}
                            onAnswerSelected={props.onAnswerSelected}
                        />
                    })}

                </ul>
            </div>

        </ReactCSSTransitionGroup>
    );
}

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};


export default Quiz;
