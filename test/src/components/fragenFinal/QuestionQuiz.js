import React from 'react';
import AnswerOption from '../fragenExample/AnswerOption';


function QuestionQuiz(props) {
    return (

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

    );
}


export default QuestionQuiz;
