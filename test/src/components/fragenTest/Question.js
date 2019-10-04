import React from 'react';
import questions from "../../JSONData";

class Question extends React.Component{
    render() {
        const question = questions.map((q, i) => {
            return(
                <div key={q.id}>
                    <p><em>Q{i+1}</em>: <span>{q.question}</span></p>
                    {q.answers.map((a) => <div>
                            <input onChange={this.props.logValue}
                                   type="radio"
                                   defaultValue={a}
                                   data-whichquestionindex={i}
                                   name={q.name} /> {a.text}
                        </div>
                        )}

                </div>
            )
        });


        return{question};
    }

}


export default Question;
