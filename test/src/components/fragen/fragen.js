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
                        answers: [],
               };
               this.handleSelectedAnswer = this.handleSelectedAnswer.bind(this);
               this.setUserAnswer = this.setUserAnswer.bind(this);
               this.goToNext = this.goToNext.bind(this);
               this.goToPrevious = this.goToPrevious.bind(this);
        }

        goToNext() {
            if(this.state.index === fragen.length -2){
                this.setState({showNext: false})
            }
            this.setState({index : (this.state.index +1) % fragen.length,
                showPrev : true
            })
        }

        goToPrevious () {
                if(this.state.index === 1){
                    this.setState({showPrev : false})
                }
                this.setState(
                    { index : (this.state.index -1) % fragen.length,
                      showNext : true
                })
        }

        handleSelectedAnswer(event) {
            this.setUserAnswer(event.currentTarget.value);

        }

        setUserAnswer(answer) {
            this.state.answers[this.state.index] = answer;
            this.forceUpdate();
        }

        render() {
                const frage = fragen[this.state.index];
                const isVisiblePrev = this.state.showPrev;
                const isVisibleNext = this.state.showNext;
                const handleSelectedAnswer = this.handleSelectedAnswer;
                const selectedAnswer = this.state.answers[this.state.index];

            return (
                    <div>
                        <hr/>
                            <h1>{frage.question}</h1>
                        <br/>
                            <hr/>
                        <h2>Answers</h2>
                        <div>
                            <ul> {frage.answers.map(function (answer) {
                                return <AnswerOption
                                                key={answer.id}
                                                answerOptionsId={answer.id}
                                                answerContent={answer.text}
                                                selectedAnswer={selectedAnswer}
                                                handleSelectedAnswer={handleSelectedAnswer}
                                        />
                                })}
                            </ul>
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
