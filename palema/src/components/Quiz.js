import React , { useState, useContext } from 'react';
import { QuizContext } from "../helpers/Context";
import { Questions } from "../helpers/QuestionBank";
import "../App.css";

function Quiz(){

    const { gameState, setGameState } = useContext(QuizContext);

    const [currentQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("1");

    const nextQuestion = () => {
        setCurrQuestion(currentQuestion + 1);
    };

    const finishQuiz = () => {
        setGameState("endScreen")
    }
    return (
        <div className="Quiz">
            <div className="options">
                <h1>{Questions[currentQuestion].prompt}</h1>
                <button onClick ={() => setOptionChosen("A")}>
                    {Questions[currentQuestion].optionA} 
                </button>
                <button onClick ={() => setOptionChosen("B")}> 
                    {Questions[currentQuestion].optionB} 
                </button>
                <button onClick ={() => setOptionChosen("C")}> 
                    {Questions[currentQuestion].optionC} 
                </button>
                <button onClick ={() => setOptionChosen("D")}> 
                    {Questions[currentQuestion].optionD} 
                </button>
            </div>

            {currentQuestion == Questions.length -1 ? (
            <button onClick={finishQuiz}> Finish Quiz </button>
            ) : (
            <button onClick={nextQuestion}> Next Question</button>
            )} 
            
            <button className ="button quitButton" onClick={() => {
                setGameState("menu");
            }}>QUIT</button>
        </div>
        );
}

export default Quiz;