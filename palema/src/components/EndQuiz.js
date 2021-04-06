import React , { useContext } from 'react';
import { QuizContext } from "../helpers/Context";
import "../App.css";

function EndQuiz(){
    const { gameState, setGameState } = useContext(QuizContext);

    return (
        <div className ="EndQuiz">
            Quiz Ended
            <button className ="RedButton" onClick={() => {
                setGameState("menu");
            }}>Back to menu </button>
        </div>
        );
}

export default EndQuiz;