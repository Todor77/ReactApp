import React from 'react'

import fragen from '../../JSONData'
import fragenA from '../../JSONDataA'
import update from 'react-addons-update';

import QuestionQuiz from "./QuestionQuiz"

class Fragen extends React.Component {
        constructor(props) {
               super(props);
               this.state = {
                   answerQuestionIndex: 0,
                        counter: 0,
                        index : 0,
                        showPrev : false,
                        showNext : true,
                        question: '',
                        questionId: '',
                        answerOptions: [],
                        answer: '',
                        answers: [],
                       answersCount: {
                       Stark: 0,
                       Lannister: 0,
                       Targaryen: 0
                   },
               };

               this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
                this.goToNext = this.goToNext.bind(this);
                this.goToPrevious = this.goToPrevious.bind(this)
        }

        componentWillMount() {
            const shuffledAnswerOptions = fragen.map((question) => question.answers);
            this.setState({
                question: fragen[0].question,
                answerOptions: shuffledAnswerOptions[0]
            });
        }

        goToNext() {
            if(this.state.index === fragen.length -2){
                this.setState({showNext: false})
            }
            this.setState({index : (this.state.index +1) % fragen.length,
                showPrev : true
            });
            this.setNextQuestion();
        }

        goToPrevious() {

            this.setState(
                { index : (this.state.index -1) % fragen.length,
                    showNext : true
            });
            if(this.state.index === 1){
                this.setState({showPrev : false})
            }

            this.setPreviousQuestion();
        };

        handleAnswerSelected(event) {
            this.setUserAnswer(event.currentTarget.value);

        }
        setNextQuestion() {
            const counter = this.state.counter + 1;
            const questionId = this.state.questionId + 1;
            const nextConut = this.state.answerQuestionIndex + 1;

            this.setState({
                answerQuestionIndex: nextConut,
                counter: counter,
                questionId: questionId,
                question: fragen[counter].question,
                answerOptions: fragen[counter].answers,
                answer: ''
            });

            this.state.answers[nextConut] = true
        }

        setPreviousQuestion() {
            const nextConut = this.state.answerQuestionIndex - 1;
            const counter = this.state.counter - 1;
            const questionId = this.state.questionId - 1;

            this.setState({
                answerQuestionIndex: nextConut,
                counter: counter,
                questionId: questionId,
                question: fragen[counter].question,
                answerOptions: fragen[counter].answers,
                answer: ''
            });
        }

        setUserAnswer(answer) {
            const updatedAnswersCount = update(this.state.answersCount, {
                [answer]: {$apply: (currentValue) => currentValue + 1}
            });
            this.setState({
                answersCount: updatedAnswersCount,
                answer: answer,
            });
            this.state.answers[this.state.answerQuestionIndex] = answer;
        }

        render() {
                const isVisiblePrev = this.state.showPrev;
                const isVisibleNext = this.state.showNext;
                return (
                    <div>
                        <QuestionQuiz
                            answer={this.state.answer}
                            answerOptions={this.state.answerOptions}
                            questionId={this.state.questionId}
                            question={this.state.question}
                            questionTotal={fragen.length}
                            isVisiblePrev={isVisiblePrev}
                            isVisibleNext={isVisibleNext}
                            goToNext={this.goToNext}
                            goToPrevious={this.goToPrevious}
                            checked={this.state.answers[this.state.answerQuestionIndex] === "gut"}
                            onAnswerSelected={this.handleAnswerSelected}
                             />

                    </div>
                )
        }
}


export default Fragen;
