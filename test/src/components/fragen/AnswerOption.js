import React from 'react'

class AnswerOption extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(<li>
                <label>
                    <input type="radio"
                           value={this.props.answerOptionsId}
                           checked={this.props.selectedAnswer === this.props.answerOptionsId}
                            onChange={this.props.handleSelectedAnswer}/>

                        {this.props.answerContent}
                </label>
            </li>
        )
    }
}

export default AnswerOption;
