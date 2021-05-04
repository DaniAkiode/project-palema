import React , { useState, useContext } from 'react';
import { QuizContext } from "../helpers/Context";
import { Questions } from "../helpers/QuestionBank2";
import "../App.css";

function Quiz(){

    const {points , setPoints, setGameState } = useContext(QuizContext);

    const [currentQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("1");

    const nextQuestion = () => {
        if (Questions[currentQuestion].answer == optionChosen) {
            setPoints(points + 1);
        }
        setCurrQuestion(currentQuestion + 1);
    };

    const finishQuiz = () => {
        if (Questions[currentQuestion].answer == optionChosen) {
            setPoints(points + 1);
        }
        setGameState("endquiz2")
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
            <button className="YellowButton" onClick={finishQuiz}> Finish Quiz </button>
            ) : (
            <button className="YellowButton" onClick={nextQuestion}> Next Question</button>
            )} 
            
            <button className ="RedButton" onClick={() => {
                setGameState("menu");
            }}>QUIT</button>
        </div>
        );
}

export default Quiz;

////PedroTech, 2021. Coding a Quiz App in ReactJS - React Resume Projects. [video] Available at: <https://www.youtube.com/watch?v=8LNb18ibNGs&list=PLUAP7Jc-AKBEkqSCjRkkzwC6D_19K24tm&index=8&t=4s&ab_channel=PedroTech> [Accessed 3 May 2021].