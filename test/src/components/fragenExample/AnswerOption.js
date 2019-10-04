import React from 'react';
import PropTypes from 'prop-types'


function AnswerOption(props) {
    return (
        <li className="answerOption">
            <input data-bla="test"
                type="radio"
                className="radioCustomButton"
                name="radioGroup"
                data-abswerType={props.answerTypes}
                data-answer={props.answer}
                checked={props.answerType === props.answer}
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
                onChange={props.onAnswerSelected}
            />

            <label className="radioCustomLabel" htmlFor={props.answerType}>
                {props.answerContent}
            </label>

        </li>
    );
}

AnswerOption.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.string.isRequired,

};

export default AnswerOption;
