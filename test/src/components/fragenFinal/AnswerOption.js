import React from 'react'

class AnswerOption extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            answers: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.justPrint = this.justPrint.bind(this);

    }

    handleChange(event) {
        console.log(this.state.answers[this.props.frageId]);
        this.state.answers[this.props.frageId] = event.target.value;
        console.log(this.state.answers);
        console.log(this.state.answers[this.props.frageId]);
        this.forceUpdate();
    }
    justPrint(e){
        console.log(this.props.frageId);
        console.log(this.state.answers[this.props.frageId]);
    }

    render() {
        return(<li>
                <label>
                    <input type="radio"
                           value={this.props.answerOptionsId}
                           checked={this.state.answers[this.props.frageId] === this.props.answerOptionsId}
                           onChange={(e) => this.handleChange(e, this.props.frageId)}/>
                            {this.props.answerContent}

                    <button onClick={this.justPrint}>Click</button>
                </label>
            </li>

        )
    }

}

export default AnswerOption;
