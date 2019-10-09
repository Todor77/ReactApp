import React from 'react';
import PropTypes from 'prop-types'


function AnswerOption(props) {
    return (
        <li className="answerOption">
            <input
                type="radio"
                data-selectedAnswer={props.selectedAnswer}
                data-answerOptionsId={props.answerOptionsId}
                checked={props.answerOptionsId === props.selectedAnswer}
                value={props.answerOptionsId}
                onChange={props.onAnswerSelected}
            />

            <label className="radioCustomLabel" htmlFor={props.answerType}>
                {props.answerContent}
            </label>

        </li>
    );
}

AnswerOption.propTypes = {
    answerOptionsId: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    selectedAnswer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired,

};

export default AnswerOption;
