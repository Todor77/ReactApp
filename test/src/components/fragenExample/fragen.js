import React from 'react'

import fragen from '../../JSONData'
import AnswerOption from "./AnswerOption";

class Fragen extends React.Component {
        constructor(props) {
               super(props);
               this.state = {
                        index : 0,
                        showPrev : false,
                        showNext : true,
                        isChecked: true,
                       answerOptions: [],
                       answer: '',
                       counter: 0,
                       questionId: 1,
                       question: '',
               };
            this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        }


        goToNext = () => {
            if(this.state.index === fragen.length -2){
                this.setState({showNext: false})
            }
                this.setState({index : (this.state.index +1) % fragen.length,
                    showPrev : true
                })
        };

        goToPrevious = () => {
                if(this.state.index === 1){
                    this.setState({showPrev : false})
                }
                this.setState(
                    { index : (this.state.index -1) % fragen.length,
                      showNext : true
                })
        };

        handleAnswerSelected(event) {
            this.setAnswer(event.target.value);
        }

        setAnswer(answer) {
            this.state.answerOptions[this.state.index] = answer;
            this.forceUpdate();
        }

        render() {
                const frage = fragen[this.state.index];
                const isVisiblePrev = this.state.showPrev;
                const isVisibleNext = this.state.showNext;
                const selectedAnswer = this.state.answerOptions[this.state.index];
                const func = this.handleAnswerSelected;
                return (
                    <div>
                        <hr/>
                        <h1>{frage.question}</h1>
                        <br/>

                        <div>
                            <hr/>
                            <h2>Answers</h2>

                            {frage.answers.map(function (answer) {
                                return <AnswerOption
                                            key={answer.id}
                                            selectedAnswer={selectedAnswer}
                                            frageId={frage.id}
                                            answerOptionsId={answer.id}
                                            answerContent={answer.text}
                                            onAnswerSelected={func}/>
                            })}

                        </div>
                            <div>
                                {isVisiblePrev && <button onClick={this.goToPrevious} className="btn-primary">Vorherige frage</button>}
                                {isVisibleNext && <button onClick={this.goToNext} className="btn-primary float-right">Nächste frage</button>}
                             </div>
                        </div>
                )
        }
}


export default Fragen;
