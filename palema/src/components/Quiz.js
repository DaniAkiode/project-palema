import React , { useState, useContext } from 'react'; //import useState and useContext
import { QuizContext } from "../helpers/Context"; //Import Quiz context from context.js
import { Questions } from "../helpers/QuestionBank"; //import questions from quiz bank 
import "../App.css";
//Quiz component function
function Quiz(){
    //set variables to useContext
    const {points , setPoints, setGameState } = useContext(QuizContext);
    //set varubles to useState
    const [currentQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("1");
    //nextQuestion function
    const nextQuestion = () => {
        //Reward 1 point if the user gets the answer right 
        if (Questions[currentQuestion].answer == optionChosen) {
            setPoints(points + 1);
        }
        //Move to the next question
        setCurrQuestion(currentQuestion + 1);
    };
    //Finish Quiz
    const finishQuiz = () => {
        if (Questions[currentQuestion].answer == optionChosen) {
            setPoints(points + 1);
        }
        setGameState("endquiz")//Change to EndQuiz.js component
    }
    return (
        <div className="Quiz">
            <div className="options">
                <h1>{Questions[currentQuestion].prompt}</h1>
                <button onClick ={() => setOptionChosen("A")}>
                    {/* Display option A for the current question from QuestionBank.js */}
                    {Questions[currentQuestion].optionA} 
                </button>
                <button onClick ={() => setOptionChosen("B")}> 
                    {/* Display option B for the current question from QuestionBank.js */}
                    {Questions[currentQuestion].optionB} 
                </button>
                <button onClick ={() => setOptionChosen("C")}> 
                    {/* Display option C for the current question from QuestionBank.js */} 
                    {Questions[currentQuestion].optionC} 
                </button>
                <button onClick ={() => setOptionChosen("D")}> 
                    {/* Display option D for the current question from QuestionBank.js */}
                    {Questions[currentQuestion].optionD} 
                </button>
            </div>
            {/* If there are no questions left then the finish button would be displayed otherwise display quit button */}
            {currentQuestion == Questions.length -1 ? (
            <button className="YellowButton" onClick={finishQuiz}> Finish Quiz </button>
            ) : (
            <button className="YellowButton" onClick={nextQuestion}> Next Question</button>
            )} 
            {/* Display quit button */}
            <button className ="RedButton" onClick={() => {
                setGameState("menu");
            }}>QUIT</button>
        </div>
        );
}

export default Quiz;

////PedroTech, 2021. Coding a Quiz App in ReactJS - React Resume Projects. [video] Available at: <https://www.youtube.com/watch?v=8LNb18ibNGs&list=PLUAP7Jc-AKBEkqSCjRkkzwC6D_19K24tm&index=8&t=4s&ab_channel=PedroTech> [Accessed 3 May 2021].