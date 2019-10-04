import React from 'react'

class AnswerOption extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return(<li>
                <label>
                    <input type="radio"
                           data-answer2={this.props.answer2}
                           data-answer1={this.props.answer1}

                           value={this.props.answerOptionsId}
                           // checked={this.state.answers[this.props.frageId] === this.props.answerOptionsId}
                           checked={this.props.answer2 === this.props.answerOptionsId}

                        // onChange={(e) => this.handleChange(e, this.props.frageId)}/>
                            onChange={this.props.test}/>

                        {this.props.answerContent}
                </label>
            </li>

        )
    }

}

export default AnswerOption;
