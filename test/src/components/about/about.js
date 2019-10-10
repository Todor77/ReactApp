import React from "react";
import {Link} from "react-router-dom";

class About extends React.Component{
    render() {
        return(
            <div>
                <h1>About Page</h1>
                <hr/>
                <Link to={"/"}><button className="btn-primary"> Züruck</button></Link>
                <Link to={"/contact"}><button className="btn-primary"> Weiter</button></Link>
            </div>
        )
    }


//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             counter: 0,
//             questionId: 1,
//             question: '',
//             answer: '',
//             answersCount: {
//                 Stark: 0,
//                 Lannister: 0,
//                 Targaryen: 0
//             },
//             result: ''
//         };
//
//         this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
//     }
//
//     componentWillMount() {
//         const shuffledAnswerOptions = quizQuestions.map((question) => question.answers);
//         this.setState({
//             question: quizQuestions[0].question,
//             answerOptions: shuffledAnswerOptions[0]
//         });
//     }
//
//
//     handleAnswerSelected(event) {
//         this.setUserAnswer(event.currentTarget.value);
//
//         if (this.state.questionId < quizQuestions.length) {
//             setTimeout(() => this.setNextQuestion(), 300);
//         } else {
//         }
//     }
//
//     setUserAnswer(answer) {
//         const updatedAnswersCount = update(this.state.answersCount, {
//             [answer]: {$apply: (currentValue) => currentValue + 1}
//         });
//
//         this.setState({
//             answersCount: updatedAnswersCount,
//             answer: answer
//         });
//     }
//
//     setNextQuestion() {
//         const counter = this.state.counter + 1;
//         const questionId = this.state.questionId + 1;
//
//         this.setState({
//             counter: counter,
//             questionId: questionId,
//             question: quizQuestions[counter].question,
//             answerOptions: quizQuestions[counter].answers,
//             answer: ''
//         });
//     }
//
//     getResults() {
//         const answersCount = this.state.answersCount;
//         const answersCountKeys = Object.keys(answersCount);
//         const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
//         const maxAnswerCount = Math.max.apply(null, answersCountValues);
//
//         return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
//     }
//
//     setResults(result) {
//         if (result.length === 1) {
//             this.setState({ result: result[0] });
//         } else {
//             this.setState({ result: 'Undetermined' });
//         }
//     }
//
//     renderQuiz() {
//         return (
//             <Quiz
//                 answer={this.state.answer}
//                 answerOptions={this.state.answerOptions}
//                 questionId={this.state.questionId}
//                 question={this.state.question}
//                 questionTotal={quizQuestions.length}
//                 onAnswerSelected={this.handleAnswerSelected}
//             />
//         );
//     }
//
//     render() {
//         return (
//             <div>
//                 {this.renderQuiz()}
//             </div>
//         );
//     }
}

export default About;
