import React from 'react'
import fragen from '../../JSONData'

class Fragen extends React.Component {
        constructor(props) {
               super(props);
               this.state = {
                        index : 0,
                        showPrev : false,
                        showNext : true,
                        answers: [{1:"false"},
                            {2:"false"},
                            {3:"false"}],

               };

            this.logValue = this.logValue.bind(this);
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

        logValue(event) {
            this.state.answers[this.state.index] = event.target.value;
        }



        render() {
                const frage = fragen[this.state.index];
                const isVisiblePrev = this.state.showPrev;
                const isVisibleNext = this.state.showNext;

                return (
                    <div>
                        <div key={frage.id}>
                            <p><em>Q{this.state.index+1}</em>: <span>{frage.question}</span></p>
                            {frage.answers.map((a) => <div>
                                                    <input
                                                           key={a.id}
                                                           type="radio"
                                                           defaultValue={a.id}
                                                           checked={this.state.answers[this.props.frageId] === this.props.answerOptionsId}
                                                           name={frage.name}
                                                           onChange={this.props.logValue}/> {a.text}
                                      </div>
                            )}

                        </div>



                        {isVisiblePrev && <button onClick={this.goToPrevious} className="btn-primary">Vorherige frage</button>}
                        {isVisibleNext && <button onClick={this.goToNext} className="btn-primary float-right">Nächste frage</button>}
                    </div>
                )
        }
}


export default Fragen;
