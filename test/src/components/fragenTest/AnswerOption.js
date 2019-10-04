import React from 'react'

class AnswerOption extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            answers: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            selectedOption: event.target.value,
        });
        if(!event.target.checked){
            this.state.answers[this.props.frageId] = '';
        }
        if(event.target.checked){
            this.state.answers[this.props.frageId] = event.target.value;
        }
    }

    render() {
        return(<li>
                <label>
                    <input type="radio"
                           value={this.props.answerOptionsId}
                           checked={this.state.answers[this.props.frageId] === this.props.answerOptionsId}
                           onChange={this.handleChange}/>
                    {this.props.answerContent}
                </label>
            </li>

        )
    }

}

export default AnswerOption;
