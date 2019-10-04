import React from 'react';
import AnswerOption from './AnswerOption';
import PropTypes from 'prop-types'


function QuestionQuiz(props) {
    return (

            <div key={props.questionId}>
                <h2 className="question">{props.question}</h2>

                <ul>
                    {props.answerOptions.map(key => {
                        return  <AnswerOption
                            key={key.content}
                            answerContent={key.text}
                            answerType={key.id}
                            answer={props.answer}
                            questionId={props.questionId}
                            test={props.checked}
                            onAnswerSelected={props.onAnswerSelected}
                        />
                    })}

                </ul>

                <div>
                    {props.isVisiblePrev && <button onClick={props.goToPrevious} className="btn-primary">Vorherige frage</button>}
                    {props.isVisibleNext && <button onClick={props.goToNext} className="btn-primary float-right">Nächste frage</button>}
                </div>
            </div>

    );
}
QuestionQuiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired



};

export default QuestionQuiz;
